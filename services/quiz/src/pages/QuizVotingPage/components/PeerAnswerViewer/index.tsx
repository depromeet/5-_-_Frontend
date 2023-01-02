import { theme } from '@depromeet/theme';
import { Accordion, Button, Text, ToastViewer, UserAvatar } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { useQuery, useQueryClient } from 'react-query';

import { DoneNumberNotice } from 'common/components/DoneNumberNotice';
import { getQuizzesById } from 'common/remotes/quizzes';
import { getUser } from 'common/remotes/user';
import { QUERY_KEYS } from 'constants/queryKeys';

import { PeerAnswerWrapper, Wrapper } from './style';

export function PeerAnswerViewer() {
  const {
    query: { quizIdParams },
  } = useRouter();
  const [isFold, setIsFold] = useState(true);

  const queryClient = useQueryClient();
  const { data: quizzes } = useQuery(QUERY_KEYS.GET_QUIZZES_BY_ID, () => getQuizzesById(quizIdParams), {
    enabled: Boolean(quizIdParams),
  });

  const { data: user } = useQuery(QUERY_KEYS.GET_USER_INFO, getUser);

  if (!quizzes || !user) {
    return null;
  }

  const peerAnswer = quizzes.quizReplyHistories.filter(element => element.creator.nickname !== user.nickname);
  return (
    <>
      <Flex css={{ justifyContent: 'space-between' }}>
        <Text variant="headline">팀원들의 답안도 확인해볼까요? </Text>
        <DoneNumberNotice done={peerAnswer.length} />
      </Flex>
      <Spacing size={16} />
      <Wrapper>
        {peerAnswer.map(({ answer, creator }) => (
          <PeerAnswerWrapper key={creator.userId}>
            <Accordion
              isFold={isFold}
              onFold={() => setIsFold(prev => !prev)}
              backgroundColor={theme.colors.gray110}
              accordionStyle={{
                padding: '22px 16px',
              }}
              headerNodes={
                <Flex css={{ alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                  <Flex css={{ alignItems: 'center' }}>
                    <UserAvatar image={creator.profileImageUrl} size="large" />
                    <Text css={{ marginLeft: '12px' }} variant="subhead" color="gray020">
                      {creator.nickname}
                    </Text>
                  </Flex>
                  <Button css={{ float: 'right' }} width={110} size="medium" type="general">
                    똑표하기
                  </Button>
                </Flex>
              }
              bodyNodes={
                <>
                  <Spacing size={22} />
                  <ToastViewer answer={answer} />
                </>
              }
            />
          </PeerAnswerWrapper>
        ))}
      </Wrapper>
    </>
  );
}
