import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Guilds Next.js Challenge</title>
        <meta name="description" content="Challenge for interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Unsplash Image Gallery
        </h1>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.techguilds.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created for{' '}
          <span className={styles.logo}>
            <Image src="/techguilds-logo.webp" alt="Techguilds Logo" width={120} height={21} />
          </span>
        </a>
      </footer>
    </div>
  )
}
