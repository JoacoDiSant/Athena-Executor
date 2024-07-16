/* eslint-disable max-len */
/* eslint-disable react/jsx-sort-props */
import Head from 'next/head';
import Script from 'next/script';

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
          name="description"
          content="Cerrajero de Urgencias a Domicilio las 24hs en Mar del Plata. TEL y WHATSAPP: 223 447 6914"
        />
        <meta name="og:site_name" content="Rey Mendez Seguridad" />
        <meta
          name="og:description"
          content="Cerrajero de Urgencias a Domicilio las 24hs en Mar del Plata. TEL y WHATSAPP: 223 447 6914."
        />
        <meta name="og:url" content="https://reymendezseguridad.com/" />
        <meta name="og:title" content="Reparación de cerraduras a domicilio" />
        <meta content="index" name="robots" />
        <script src="/static/script.js" type="text/javascript" />
        <Script
          src="https://www.googletagmanager.com/gtag/js"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-10808154807');
        `}
        </Script>
      </Head>
      <main>
        <App />
      </main>
    </>
  );
}
