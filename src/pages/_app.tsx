import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Header } from '@/components/Header'
import '@/styles/globals.css'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content='Download your music data from spotify'
        />
        <link rel='icon' href='/favicon.ico' />
        <title>Next.js + Tailwind CSS</title>
      </Head>
      <Header />
      <main className='container mx-auto'>
        <Component {...pageProps} />
      </main>
    </>
  )
}
