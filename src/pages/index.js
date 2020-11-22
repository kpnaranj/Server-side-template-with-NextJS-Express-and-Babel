import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>This is main</main>
        <footer>This is footer</footer>
      </Layout>
    </Fragment>
  );
}
