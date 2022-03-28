import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { next, previous } from "../utils/icon";
import ProductCard from "../components/card";
import { useState } from "react";
import Link from "next/link";
import { productData2, productData1 } from "../utils/db";
import Button from "./button";
SwiperCore.use([Navigation]);

export default function Slider() {
  const [arrowNext, setArrowNext] = useState(true);
  const [arrowPrev, setArrowPrev] = useState(false);
  const data = productData1.concat(productData2);

  return (
    <div className="space-y-8 my-12">
      <div className="flex flex-col 2xl:flex-row space-y-2 2xl:space-y-0 2xl:justify-between max-w-8xl items-center mx-auto text-zinc-800 px-4">
        <p className="text-3xl font-bold">Популярные модели</p>
        <Link href="/catalog">
          <a className="text-sm text-teal-400">Какую модель выбрать?</a>
        </Link>
      </div>
      <div className="flex items-center space-x-8 px-4">
        <div
          className={`swiper-button-prev cursor-pointer ${
            arrowPrev ? "stroke-gray-500" : "stroke-gray-200"
          }`}
          onClick={() => {
            setArrowNext(true);
          }}
        >
          {previous}
        </div>
        <Swiper
          className="mySwiper select-none"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1300: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          onReachBeginning={() => {
            setArrowPrev(false);
            setArrowNext(true);
          }}
          onReachEnd={() => {
            setArrowNext(false);
            setArrowPrev(true);
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {data.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <ProductCard key={i} id={i} data={data} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          className={`swiper-button-next cursor-pointer ${
            arrowNext ? "stroke-gray-500" : "stroke-gray-200"
          }`}
          onClick={() => {
            setArrowPrev(true);
          }}
        >
          {next}
        </div>
      </div>
      <Link href={"/catalog"}>
        <a className="btn flex flex-col sm:flex-row sm:justify-end xl:px-16">
          <Button
            text={"В каталог"}
            styleClass={
              "flex shadow-md items-center justify-center space-x-2 py-3 px-4 bg-teal-500 rounded text-white trasinition-all duration-300 group lg:hover:bg-teal-400"
            }
          />
        </a>
      </Link>
    </div>
  );
}
