import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import Items from "../components/product";
import { useContext } from "react";
import { CartContext } from "../utils/context";

function CartPage() {
  const { cartItem, setCartItem } = useContext(CartContext);
  return (
    <>
      <Head>
        <title>Meliorit | Cart</title>
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      <Layout>
        <main className="px-4 max-w-7xl mx-auto my-20 lg:mt-44 space-y-4">
          <div className="flex space-x-2 md:space-x-4">
            <Link href="/cart">
              <a className="pb-2 px-1 border-b-2 border-teal-500">
                <p>Корзина</p>
              </a>
            </Link>
            <Link href="/favorite">
              <a className="pb-2 px-1">
                <p>Избранное</p>
              </a>
            </Link>
          </div>
          <p className="text-3xl font-semibold">Корзина</p>
          <Items data={cartItem} itemState={setCartItem} />
        </main>
      </Layout>
    </>
  );
}

export default CartPage;
