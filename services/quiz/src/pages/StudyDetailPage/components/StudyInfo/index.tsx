import { Tag, Text, UserAvatar } from '@depromeet/toks-components';
import { ErrorBoundary } from '@toss/error-boundary';
import { useSuspendedQuery } from '@toss/react-query';
import { SSRSuspense } from '@depromeet/toks-components';

import { QUERY_KEYS } from 'constants/queryKeys';
import { User } from '../../../../../utils/userUtils';
import { Body, Footer, Header, Info, StudyTags } from './style';
import { getStudyInfo } from 'pages/StudyDetailPage/remote/quiz';

interface StudyInfo {
  studyId: string;
  title: string;
  description: string;
  studyTags: string[];
  members: User[];
}

const makeStudyTags = (tagInfos: string[]) => [...tagInfos].map(tagInfo => <Tag value={tagInfo} />);

function StudyInfo() {
  const { data: studyInfo } = useSuspendedQuery(QUERY_KEYS.GET_STUDY_INFO, getStudyInfo);
  const { studyId, title, description, studyTags, members } = studyInfo as StudyInfo;
  return (
    <Info>
      <Header>
        <Text
          color="white"
          variant="title01"
          css={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
          as="h1"
        >
          {title}
        </Text>
      </Header>
      <Body>
        <Text color="gray020" variant="body02">
          {description}
        </Text>
        <StudyTags>
          <Tag.Row style={{ padding: 0 }}>{makeStudyTags(studyTags)}</Tag.Row>
        </StudyTags>
      </Body>
      <Footer>
        {/* UserAvatar Group id가 여기서는 스터디 id가 되고 각 퀴즈에서는 퀴즈의 id가 됨 */}
        <UserAvatar.Group view={6} id={studyId} groupType="study">
          {members.map((user, index) => (
            <UserAvatar key={index} {...user} size="large" className={`avatar--user_${user.id}`} tooltip={true} />
          ))}
        </UserAvatar.Group>
      </Footer>
    </Info>
  );
}

export default () => (
  <ErrorBoundary renderFallback={() => null}>
    <SSRSuspense fallback={<div>Study info skeleton</div>}>
      <StudyInfo/>
    </SSRSuspense>
  </ErrorBoundary>
)