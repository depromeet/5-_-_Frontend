'use client';

import clsx from 'clsx';

import { Text, bgColor } from '@/common';

import { ProgressBar } from './ProgressBar';
import { Thumbnail } from './Thumbnail';
import { QuizButtonProps } from './type';

export function QuizButton({
  isSubmitted,
  isSelected = false,
  OXType,
  imageUrl,
  percentage = 0,
  participationLabel,
  className,
  name,
}: QuizButtonProps) {
  return (
    <button className={clsx(className, 'flex flex-1 flex-col items-center')}>
      {(OXType || imageUrl) && (
        <Thumbnail
          className="mb-24px w-full"
          OXType={OXType}
          imageUrl={imageUrl}
          name={name}
        />
      )}
      <div
        className={clsx(
          bgColor['gray90'],
          'relative h-40px w-full rounded-8px'
        )}
      >
        {isSubmitted && (
          <ProgressBar percentage={percentage} isSelected={isSelected} />
        )}
        <div className="absolute z-10 flex h-full w-full items-center justify-center">
          <Text typo="bodyBold" color="gray10">
            {name}
          </Text>
        </div>
      </div>
      {isSubmitted && participationLabel && (
        <Text
          className="mt-14px"
          typo="bodyBold"
          color={isSelected ? 'primaryDefault' : 'gray60'}
        >
          {participationLabel}
        </Text>
      )}
    </button>
  );
}
