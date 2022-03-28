import Head from "next/head";
import Section1 from "../components/Blog/section1";
import Section2 from "../components/Blog/section2";
import Layout from "../components/Layout";
function BlogPage() {
  return (
    <>
      <Head>
        <title>Meliorit | BlogPage</title>
        <link rel="icon" href="/icons/favicon.png" />
      </Head>

      <Layout>
        <main className="px-4">
          <Section1 />
          <Section2 />
        </main>
      </Layout>
    </>
  );
}

export default BlogPage;
