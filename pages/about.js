import Section from "../components/About";
import Head from "next/head";
import Layout from "../components/Layout";

function AboutPage() {
  return (
    <>
      <Head>
        <title>Meliorit | About</title>
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      <Layout>
        <main className="px-4">
          <Section />
        </main>
      </Layout>
    </>
  );
}

export default AboutPage;
