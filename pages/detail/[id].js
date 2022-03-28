import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import Layout from "../../components/Layout";
import { CartContext, FavoriteContext } from "../../utils/context";
import { productData1, productData2 } from "../../utils/db";
import { cart, star } from "../../utils/icon";

function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const data = productData1.concat(productData2);
  const { cartItem, setCartItem } = useContext(CartContext);
  const { starItem, setStarItem } = useContext(FavoriteContext);

  const changeStar = (e) => {
    data[id].star = true;
    if (starItem.some((item) => item.id === data[id].id)) {
      return;
    }
    const newValue = [...starItem];
    newValue.push(data[id]);
    setStarItem(newValue);
  };

  return (
    <>
      <Head>
        <title>Meliorit | Detail</title>
        <link rel="icon" href="/icons/favicon.png" />
      </Head>
      {data.length > 0 && id && (
        <Layout>
          <main className="px-4">
            <section className="max-w-2xl lg:max-w-7xl mx-auto my-12 lg:mt-32 flex flex-col lg:flex-row gap-8">
              <div className="flex justify-center flex-shrink lg:flex-shrink-0 xl:flex-shrink">
                <Image
                  src="/image/detail-image.png"
                  width={420}
                  height={300}
                  alt={"detail"}
                />
              </div>
              <div className="space-y-4 lg:max-w-lg">
                <p className="text-4xl font-bold">{data[id].title}</p>
                <p>
                  {data[id].detail}. Межсетевые экраны следующего поколения
                  обеспечивают безопасность ваших приложений и защищают от
                  современных кибер-угроз.
                </p>

                <div className="flex gap-6">
                  <div className="w-24">
                    <p className="text-sm text-zinc-800">
                      {data[id].info.left[0]}
                    </p>
                    <p className="font-bold text-sm">{data[id].info.left[1]}</p>
                  </div>
                  <div className="w-24">
                    <p className="text-sm text-zinc-800">
                      {data[id].info.right[0]}
                    </p>
                    <p className="font-bold text-sm">
                      {data[id].info.right[1]}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-grow flex-shrink-0">
                <div className="flex-grow flex flex-col flex-shrink-0 gap-2 lg:p-8 lg:bg-gray-100 rounded">
                  <button className="relative z-10 flex items-center px-4 hover:text-teal-500 text-white justify-center gap-x-2 py-3 rounded border-2 border-teal-500 transition-all duration-500 group bg-teal-500 hover:bg-gray-100">
                    <p>Купить сейчас</p>
                  </button>
                  <button
                    className="relative z-10 flex items-center px-4 justify-center gap-x-2 py-3 rounded border-2 border-teal-500 transition-all duration-500 group hover:bg-teal-500"
                    onClick={(e) => {
                      if (cartItem.some((items) => data[id].id === items.id)) {
                        return;
                      }
                      const newValue = [...cartItem];
                      newValue.push(data[id]);
                      setCartItem(newValue);
                    }}
                  >
                    <div className="fill-teal-500 group-hover:fill-white w-5 h-5">
                      {cart}
                    </div>
                    <p className="text-teal-500 group-hover:text-white">
                      В корзину
                    </p>
                  </button>
                  <button
                    className="relative z-10 flex items-center px-4 justify-center gap-x-2 py-3 rounded border-2 border-teal-500 transition-all duration-500 group hover:bg-teal-500"
                    onClick={changeStar}
                  >
                    <div className="fill-teal-500 group-hover:fill-white w-5 h-5">
                      {star}
                    </div>
                    <p className="text-teal-500 group-hover:text-white">
                      В избранный
                    </p>
                  </button>
                </div>
              </div>
            </section>
          </main>
        </Layout>
      )}
    </>
  );
}

export default Detail;
