import Head from "next/head";
import Layout, { siteTitle, name } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello! This is {name}!! I am a Software Engineer. I have expertise in
          React.js, React Native, TypeScript. Currently I am learning Next.js
          and WordPress.
        </p>
        <p>
          You can contact me on{" "}
          <a
            className={utilStyles.lightText}
            href="https://twitter.com/IamSwarnaliRoy"
          >
            Twitter
          </a>
          . You can view my projects on{" "}
          <a
            className={utilStyles.lightText}
            href="https://github.com/SwarnaliRoy94"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          This is a sample website - you will be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
