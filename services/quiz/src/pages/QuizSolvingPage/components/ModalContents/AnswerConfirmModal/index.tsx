import { Flex, Spacing } from '@toss/emotion-utils';
import { Text, Image, Button, Timer } from '@depromeet/toks-components';

export function AnswerConfirmModal() {
  return (
    <Flex.Center direction="column">
      <Text variant="title03">똑스 풀기가 끝나면</Text>
      <Text variant="title03">우수 답변을 확인해 보세요</Text>
      <Spacing size={40} />
      <Text variant="subhead" color="gray040">
        똑스 종료까지
      </Text>
      <Text variant="title03" color="gray040">
        {/* time = quiz.durationOfSecond 넘기기 */}
        <Timer />
      </Text>
      <Image
        width={170}
        height={170}
        alt="expected-img"
        src="https://toks-web-assets.s3.amazonaws.com/toks-emoji/expected_emoji.svg"
      />
      <Spacing size={20} />
      <Button>확인했어요</Button>
    </Flex.Center>
  );
}
