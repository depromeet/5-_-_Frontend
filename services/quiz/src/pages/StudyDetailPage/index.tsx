import { BackButton } from 'components/common/BackButton';
import { ToksHeader } from 'components/common/ToksHeader';
import { QuizList } from 'components/StudyDetailPage/QuizList';
import { Ranking } from 'components/StudyDetailPage/Ranking';
import { StudyInfo } from 'components/StudyDetailPage/StudyInfo';
import { StudyProgress } from 'components/StudyDetailPage/StudyProgress';
import { Page, Section, Wrapper } from './style';

export default function StudyDetailPage() {
  return (
    <Page>
      <ToksHeader>
        <BackButton />
      </ToksHeader>
      <Section>
        <Wrapper>
          <StudyInfo />
          <StudyProgress />
          <QuizList />
          <Ranking />
        </Wrapper>
      </Section>
    </Page>
  );
}
