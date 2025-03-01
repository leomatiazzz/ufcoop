// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        {" "}
        {/* Definindo o idioma do site */}
        <Head>
          {/* Aqui você pode adicionar links para fontes, metatags, favicon, etc. */}
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main /> {/* Renderiza o conteúdo da sua página */}
          <NextScript /> {/* Script necessário para o Next.js */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
