'use client';

import clsx from 'clsx';

import { QuizButton, Thumbnail } from '@/app/quiz/components';
import { useGetQuizDetailQuery } from '@/app/quiz/hooks/useGetQuizDetailQuery';
import { QuizButtonType } from '@/app/quiz/models/quiz';
import { Text, bgColor } from '@/common';

type Props = {
  params: {
    quizId: string;
  };
};

function DetailPage({ params: { quizId } }: Props) {
  const quizDetail = useGetQuizDetailQuery(quizId);
  if (quizDetail === null) {
    return null;
  }
  const {
    quizTitle,
    tags,
    oxImageUrl,
    buttonLeft,
    buttonRight,
    quizType,
    oxDescription,
    oxAnswer,
    categoryName,
    quizReply,
    answerPercentage,
    answerParticipationLabel,
    isSubmitted,
  } = quizDetail;

  const isExistOXImage = Boolean(oxImageUrl);
  const isVisibleOXImage = !isSubmitted && isExistOXImage;
  const replyAnswer = quizReply?.answer;
  const isOXCorrectAnswer = replyAnswer === oxAnswer; // 퀴즈의 정답이 1혹은 2 사용자의 답안은 O혹은 X로 넘어오는 문제 해결 안된 상태
  const checkSameQuizType = (type: string) => quizType.startsWith(type);
  const checkSelectedAnswer = (buttonType: QuizButtonType) =>
    replyAnswer === buttonType;

  const handleSubmitQuiz = async (answer: QuizButtonType) => {
    // try {
    //   await postSubmitQuizByQuizId(quizId, answer);
    // } finally {
    //   router.refresh();
    // }
    answer;
  };

  return (
    <section className={clsx(bgColor['gray110'], 'mt-8px rounded-16px p-20px')}>
      <div className="flex gap-8px">
        {[categoryName, ...tags].map((tagName, index) => (
          <Text
            key={`${tagName}-${index}`}
            typo="captionBold"
            color="primaryDefault"
          >
            {tagName}
          </Text>
        ))}
      </div>
      <Text className="mt-12px block " typo="headingL" color="gray10">
        {quizTitle}
      </Text>
      <div className="mt-48px">
        {isVisibleOXImage && (
          <Thumbnail
            className="mb-24px w-full"
            imageUrl={oxImageUrl}
            name="OX퀴즈 설명"
          />
        )}
        <div className="flex gap-16px">
          {checkSameQuizType('A_B_') ? (
            <>
              <QuizButton
                isSubmitted={isSubmitted}
                imageUrl={buttonLeft.imageUrl}
                percentage={answerPercentage.left}
                participationLabel={answerParticipationLabel.left}
                isSelected={checkSelectedAnswer('A')}
                name={buttonLeft.button.name}
                onClick={() => handleSubmitQuiz('A')}
              />
              <QuizButton
                isSubmitted={isSubmitted}
                imageUrl={buttonRight.imageUrl}
                percentage={answerPercentage.right}
                participationLabel={answerParticipationLabel.right}
                isSelected={checkSelectedAnswer('B')}
                name={buttonRight.button.name}
                onClick={() => handleSubmitQuiz('B')}
              />
            </>
          ) : isSubmitted ? (
            <div className="mx-auto flex flex-col items-center">
              <Thumbnail OXType={isOXCorrectAnswer ? 'O' : 'X'} />
              <Text className="mt-20px " typo="headingL" color="gray10">
                {isOXCorrectAnswer
                  ? '딩동댕! 정답이에요.'
                  : '앗, 오답이에요! 정답은...'}
              </Text>
              <Text
                className="mt-2px "
                typo="bodyBold"
                color={isOXCorrectAnswer ? 'blue10' : 'dangerDefault'}
              >
                {checkSelectedAnswer('O')
                  ? answerParticipationLabel.left
                  : answerParticipationLabel.right}
              </Text>
              <Text className="mt-24px block" typo="body" color="white">
                {oxDescription}
              </Text>
            </div>
          ) : (
            <>
              <QuizButton
                isSubmitted={isSubmitted}
                OXType={isExistOXImage ? undefined : 'O'}
                name="예"
                onClick={() => handleSubmitQuiz('O')}
              />
              <QuizButton
                isSubmitted={isSubmitted}
                OXType={isExistOXImage ? undefined : 'X'}
                name="아니오"
                onClick={() => handleSubmitQuiz('X')}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
