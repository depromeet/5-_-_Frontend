import { Button, Image, Tag, Text } from '@depromeet/toks-components';
import { Flex, Spacing, width100 } from '@toss/emotion-utils';
import { QUERY_KEYS } from 'constants/queryKeys';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';

import { Wrapper } from 'pages/JoinStudy/components/JoinStudyBox/style';
import { StudyInfo } from 'pages/JoinStudy/components/StudyInfo';
import { getStudyById } from 'pages/JoinStudy/remotes/study';

export function JoinStudyBox() {
  //TODO undefined 이슈 해결하기
  const router = useRouter();
  const studyId = router.query.studyId;
  const { data: study } = useQuery([QUERY_KEYS.GET_STUDY_BY_ID], () => getStudyById(studyId));

  const onClick = () => {};
  console.log(study);

  const startDate = study?.startedAt.split('T')[0].replaceAll('-', '. ');
  const endDate = study?.endedAt.split('T')[0].replaceAll('-', '. ');

  // 스터디 인원 api 수정되면 변경 예정.
  const personnelDescription = '5-7명';

  return (
    <Wrapper>
      <div>
        <Text variant="title03">{study?.name}</Text>;{/* tag margin 위아래 10 고려하여 18->8 */}
        <Spacing size={8} />
        <Tag.Row>
          {study?.tags.map(tag => (
            <Tag key={tag.id}>{tag.name}</Tag>
          ))}
        </Tag.Row>
      </div>
      <Flex direction="column" css={{ gap: '32px' }}>
        <StudyInfo
          leftAddon={
            <Image
              width={16}
              height={22}
              src="https://toks-web-assets.s3.amazonaws.com/studyinfo-icon.svg"
              alt="StudyInfo 아이콘"
            />
          }
          title="우리 스터디는"
          description={<Text variant="body01">{study?.description}</Text>}
        />
        <StudyInfo
          leftAddon={
            <Image
              width={16}
              height={22}
              src="https://toks-web-assets.s3.amazonaws.com/studyinfo-icon.svg"
              alt="StudyInfo 아이콘"
            />
          }
          title="스터디 기간은"
          description={
            <>
              <Text variant="body02" color="gray040">
                시작일
              </Text>
              <Text variant="body01" css={{ marginLeft: '12px' }}>
                {startDate} 일
              </Text>
              <Text variant="body02" color="gray040" css={{ marginLeft: '36px' }}>
                종료일
              </Text>
              <Text variant="body01" css={{ marginLeft: '12px' }}>
                {endDate} 일
              </Text>
            </>
          }
        />
        <StudyInfo
          leftAddon={
            <Image
              width={16}
              height={22}
              src="https://toks-web-assets.s3.amazonaws.com/studyinfo-icon.svg"
              alt="StudyInfo 아이콘"
            />
          }
          title="스터디 인원은"
          description={<Text variant="body01">{personnelDescription}을 계획하고 있어요. </Text>}
        />
      </Flex>
      <Button css={width100} onClick={onClick}>
        참여하기
      </Button>
    </Wrapper>
  );
}
