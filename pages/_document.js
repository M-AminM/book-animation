import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  
  return (
    <Html>
      <Head>
        <title>Amin Asgharnejad</title>
        <link rel="stylesheet" href="/css/bootstrap.css" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        {/* <meta name="viewport" content="width=191"/> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}