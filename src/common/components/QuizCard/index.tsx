import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import { ICON_URL } from '@/common/constants';

import type { QuizCardProps } from './types';
import { Text } from '../Text';

export const QuizCard = ({
  categoryTitle,
  quizDescription,
  images,
  likeCount = 0,
  commentCount = 0,
  sizeType = 'large',
  quizType = 'default',
}: QuizCardProps) => {
  const isSmall = sizeType === 'small';
  const isOX = quizType === 'ox';

  const OxQuizThumbnail = () => {
    if (isSmall) {
      return (
        <div className="flex h-full w-full rounded-8px">
          <div
            className="flex flex-1 items-center justify-center"
            style={{
              backgroundColor: '#3E97FF',
            }}
          >
            <Image src={ICON_URL.O} alt="OX 퀴즈 O" width={24} height={24} />
          </div>
          <div
            className="flex flex-1 items-center justify-center"
            style={{
              backgroundColor: '#FF5B65',
            }}
          >
            <Image src={ICON_URL.X} alt="OX 퀴즈 X" width={22} height={22} />
          </div>
        </div>
      );
    }

    return (
      <div className="flex h-full w-full flex-col gap-8px">
        <div
          className="relative flex flex-1 items-center justify-center rounded-8px"
          style={{
            backgroundColor: '#3E97FF',
          }}
        >
          <Image
            src="https://toks-web-assets.s3.amazonaws.com/ic_O.svg"
            alt="OX 퀴즈 O"
            width={38}
            height={38}
          />
        </div>
        <div
          className="relative flex flex-1 items-center justify-center rounded-8px"
          style={{
            backgroundColor: '#FF5B65',
          }}
        >
          <Image
            src="https://toks-web-assets.s3.amazonaws.com/ic_X.svg"
            alt="OX 퀴즈 X"
            width={36}
            height={36}
          />
        </div>
      </div>
    );
  };

  return (
    <div
      className={clsx(
        'flex w-full min-w-180px justify-between gap-20px rounded-12px bg-gray-110 px-16px py-20px',
        isSmall ? 'h-160px' : 'h-220px'
      )}
    >
      <div className="flex w-full flex-1 flex-col">
        <Text
          className="inline-block"
          typo="captionBold"
          color="primaryDefault"
        >
          {categoryTitle}
        </Text>
        <Text
          className="inline-block pt-12px"
          typo={isSmall ? 'subheadingBold' : 'headingM'}
          color="gray10"
        >
          {quizDescription}
        </Text>
        <div className="mt-auto flex gap-8px">
          <Text typo="caption" color="gray50">
            🔥 참여 {likeCount}명
          </Text>
          <Text typo="caption" color="gray50">
            💬 댓글 {commentCount}개
          </Text>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col justify-between overflow-hidden rounded-8px">
        {isOX ? (
          <OxQuizThumbnail />
        ) : (
          images?.map((src, index) => (
            <div className="relative h-full" key={`${src}-${index}`}>
              <Image
                className="flex-1"
                src={src}
                alt={src}
                loading="lazy"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOsrwcAAYMBABbFvRQAAAAASUVORK5CYII="
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
