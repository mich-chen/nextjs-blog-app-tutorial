import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

const selfIntro = `
  Hello! My name is Michelle and I am a frontend focused full-stack software engineer
  actively seeking job opportunities!
  I am also a ceramicist at heart and love wheel thrown and hand built pottery! 
`

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>{selfIntro}</p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>

        <p>
          Read <Link href="/posts/first-post">first post here!</Link>
        </p>
      </section>

      
    </Layout>
  );
}
