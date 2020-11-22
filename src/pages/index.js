import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import ExampleForm from "../components/ExampleForm";
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className="text-center">This is the example box</main>
        <ExampleForm id={1} />
        <footer className="text-center">This is footer</footer>
      </Layout>
    </Fragment>
  );
}
