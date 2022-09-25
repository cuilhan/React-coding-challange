import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Tech Guilds Next.js Challenge</title>
        <meta name="description" content="Challenge for interview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        <h1 className="title">
          Unsplash Image Gallery
        </h1>
        <div className="image-gallery">
          <h2 className="sub-title">
              Image gallery will be here!
          </h2>
        </div>
      </main>

      <footer className={"footer"}>
        <a
          href="https://www.techguilds.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created for{' '}
          <span className={"logo"}>
            <Image src="/techguilds-logo.webp" alt="Techguilds Logo" width={120} height={21} />
          </span>
        </a>
      </footer>
    </div>
  )
}
