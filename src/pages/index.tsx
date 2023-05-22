import Head from 'next/head';

import App from '@/Components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <main>
        <App />
      </main>
    </>
  );
}
