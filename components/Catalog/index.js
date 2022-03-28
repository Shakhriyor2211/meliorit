import { arrow } from "../../utils/icon";
import Link from "next/link";
import Carousel from "./swiper";
import { useState } from "react";
import ProductContainer from "./productContainer";
import Organization from "../organization";

function Product() {
  const [active, setActive] = useState(true);
  return (
    <>
      <section className="max-w-7xl text-zinc-800 mx-auto mt-24 lg:mt-40 space-y-4 lg:space-y-6">
        <div className="text-gray-400 flex space-x-2 items-center">
          <Link href={"/"}>
            <a className="lg:hover:text-teal-500">Главная</a>
          </Link>
          <div className="w-4 h-4 -rotate-90">{arrow}</div>
          <Link href={"/catalog"}>
            <a className="lg:hover:text-teal-500">Каталог</a>
          </Link>
        </div>
        <p className="text-4xl font-bold">Каталог</p>
        <Carousel />
      </section>
      <section className="max-w-7xl text-zinc-800 mx-auto my-8 lg:my-12 space-y-8 md:space-y-12 lg:space-y-16">
        <div className="flex justify-center md:justify-start space-x-6">
          <div
            className={`pb-4 px-1 ${active && "border-b-2 border-b-teal-500"}`}
          >
            <p
              className="cursor-pointer text-xs sm:text-base select-none"
              onClick={() => {
                setActive(true);
              }}
            >
              Межсетевые экраны
            </p>
          </div>
          <div
            className={`pb-4 px-1 ${!active && "border-b-2 border-b-teal-500"}`}
          >
            <p
              className="cursor-pointer text-xs sm:text-base select-none"
              onClick={() => {
                setActive(false);
              }}
            >
              Корпоративные решения
            </p>
          </div>
        </div>
        <div className="space-y-8 md:space-y-12">
          <p className="text-3xl font-semibold text-center">
            {active ? "Межсетевые экраны" : "Корпоративные решения"}
          </p>
          <ProductContainer active={active} />
        </div>
        <hr />
      </section>
      <section className="max-w-7xl mx-auto my-12 sm:my-16">
        <Organization />
      </section>
    </>
  );
}

export default Product;
