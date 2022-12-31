import { Icon, Text, UserAvatar } from '@depromeet/toks-components';
import { Flex, Spacing } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { QUERY_KEYS } from 'constants/queryKeys';
import { getQuizById } from 'common/components/QuizQuestion/remotes/quiz';

import { DescriptionContainer, Line, Wrapper } from './style';
import { QuizTimer } from '../QuizTimer';

export function QuizQuestion() {
  const {
    query: { quizId },
  } = useRouter();

  const { data: quiz } = useQuery(QUERY_KEYS.GET_QUIZ_BY_ID, () => getQuizById(quizId), { enabled: Boolean(quizId) });

  if (!quiz) {
    return null;
  }

  return (
    <Wrapper>
      <Flex css={{ alignItems: 'center' }}>
        <UserAvatar image={`${quiz?.creator.profileImageUrl}`} size="large" />
        <Text variant="subhead" color="gray040" css={{ marginLeft: '12px' }}>
          {quiz?.creator.nickname}
        </Text>
      </Flex>
      <Spacing size={24} />
      <Text variant="title04">Q. {quiz?.quiz}</Text>
      <Spacing size={24} />
      <DescriptionContainer>
        <Text variant="body02" color="gray040">
          {quiz?.description}
        </Text>
      </DescriptionContainer>
      <Line />
      <Spacing size={16} />
      <Flex css={{ textAlign: 'center' }}>
        <Icon iconName="ic-time" />
        <Text variant="title04" color="gray030" css={{ marginLeft: '10px' }}>
          <QuizTimer duration={quiz.durationOfSecond} />
        </Text>
      </Flex>
    </Wrapper>
  );
}
