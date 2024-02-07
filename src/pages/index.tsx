import Head from 'next/head';

import App from '@/Components';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Cerrajería 24 Horas - Mar del Plata - Rey Mendez Seguridad
        </title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="Cerrajería 24 Horas - Mar del Plata - Rey Mendez Seguridad"
          name="description"
        />
        <meta content="index" name="robots" />
        <script src="/static/script.js" type="text/javascript" />
      </Head>
      <main>
        <App />
      </main>
    </>
  );
}
