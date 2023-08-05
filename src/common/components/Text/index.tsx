import { HTMLAttributes, ReactNode, createElement } from 'react';

import {
  KeyOfColor,
  KeyOfTypography,
  cn,
  textColor,
  typography,
} from '@/common';

import { TEXT_TAGS } from './constants';

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  color?: KeyOfColor;
  typo: KeyOfTypography;
  children: ReactNode;
  as?: keyof typeof TEXT_TAGS;
}

export function Text({
  color = 'white',
  children,
  typo,
  as = 'span',
  className,
  ...rest
}: TextProps) {
  return createElement(
    as,
    {
      className: `${textColor[color]} ${typography[typo]} ${className}`,
      ...rest,
    },
    [children]
  );
}
