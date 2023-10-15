import './globals.css';
import clsx from 'clsx';
import localFont from 'next/font/local';

import { bgColor } from '@/common/foundation';
import QueryProvider from '@/common/providers/QueryProvider';

export const metadata = {
  title: '똑스',
  description: 'toks에서 퀴즈를 풀어보세요.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
        />
        <link
          rel="icon"
          href="https://toks-web-assets.s3.amazonaws.com/legacy/toktok.ico"
          sizes="any"
        />
      </head>
      <body
        className={clsx(
          pretendard.className,
          bgColor['gray120'],
          'body-h-screen'
        )}
      >
        <QueryProvider>
          <StyledLayout>{children}</StyledLayout>
        </QueryProvider>
      </body>
    </html>
  );
}

function StyledLayout({ children }: { children: React.ReactNode }) {
  return <div className={clsx('px-20px', 'main-h-screen')}>{children}</div>;
}

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});
