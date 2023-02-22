import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="정보백업 홈페이지" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="이미지경로" />

        {/* 미리보기 이미지 */}
        <meta property="og:description" content="-w-" />

        <meta property="og:title" content="ZE project" />

        <meta name="google" content="notranslate" />

        {/* 파비콘 */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
