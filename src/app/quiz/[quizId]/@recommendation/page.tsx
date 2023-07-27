import { QuizCarousel } from '@/app/quiz/components';
import { getRecommendationByQuizId } from '@/app/quiz/remotes/quiz';
import { Text } from '@/common';

type Props = {
  params: {
    quizId: string;
  };
};

async function RecommendatonPage({ params: { quizId } }: Props) {
  const quizRecommendModels = await getRecommendationByQuizId(quizId);
  return (
    <div className="mt-64px">
      <Text className="inline-block" typo="subheadingBold" color="gray10">
        더 많은 퀴즈를 확인해보세요
      </Text>
      <QuizCarousel
        className="mt-16px"
        quizRecommendModels={quizRecommendModels}
      />
    </div>
  );
}

export default RecommendatonPage;
