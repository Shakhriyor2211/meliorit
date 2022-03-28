import Head from "next/head";
import Product from "../components/Catalog";
import Layout from "../components/Layout";

function CatalogPage() {
  return (
    <>
      <Head>
        <title>Meliorit | Catalog</title>
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      <Layout>
        <main className="px-4">
          <Product />
        </main>
      </Layout>
    </>
  );
}

export default CatalogPage;
