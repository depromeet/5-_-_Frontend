import Image from 'next/image';

import { BottomSheet, ICON_URL, Text } from '@/common';
import { BottomSheetProps } from '@/types/bottomsheet';

export const OnboardingBottomSheet = ({
  onClose,
  isShow,
}: BottomSheetProps) => {
  return (
    <BottomSheet onClose={() => onClose()} isShow={isShow}>
      <div className="px-20px py-24px">
        <div className="flex items-center justify-between pb-22px">
          <Text typo="headingM" color="gray10">
            똑스와 함께 시작해볼까요?
          </Text>
          <button>
            <Image
              src={ICON_URL.CLOSE}
              alt="close"
              width={24}
              height={24}
              onClick={() => {
                onClose();
              }}
            />
          </button>
        </div>
      </div>
    </BottomSheet>
  );
};
