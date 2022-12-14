import '../styles/global.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';

import { Social } from '../components/Social';
import Footer from '../components/Footer';
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <DefaultSeo
        titleTemplate='Deusdedit Vilar | %s'
        canonical={process.env.NEXT_PUBLIC_HOST}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: `${process.env.NEXT_PUBLIC_HOST}/logo.ico`,
          }
        ]}
        languageAlternates={[{
          hrefLang: 'en',
          href: `${process.env.NEXT_PUBLIC_HOST}/en`,
        }]}
        description="Deusdedit Vilar é um engenheiro Full-Stack especializado em construir experiências digitais excepcionais."
        additionalMetaTags={[
          {
            property: 'keywords',
            content: "Deusdedit Vilar,desenvolvedor,developer,fullstack,Full-Stack,frontend,backend,dev,portfolio"
          }
        ]}
        openGraph={{
          type: 'website',
          url: process.env.NEXT_PUBLIC_HOST,
          title: 'Deusdedit Vilar | Full-Stack Dev',
          description: "Deusdedit Vilar's Full-Stack dev portfolio.",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_HOST}/src_1200.png`,
              width: 1200,
              height: 630,
              alt: 'Logo com as letras D e V entrelaçadas com os dizeres Deusdedit Vilar embaixo',
            }
          ],
        }}
      />
      <Header />
      <AnimatePresence>
        <Social key={router.locale} />
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default appWithTranslation(MyApp);