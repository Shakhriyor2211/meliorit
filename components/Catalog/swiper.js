import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

import Image from "next/image";
export default function Carousel() {
  return (
    <>
      <div className="rounded-xl bg-gray-100 px-8 hidden lg:block">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="max-w-6xl mx-auto flex justify-between items-center pt-16 pb-24">
              <p className=" max-w-60 text-3xl font-bold">
                Защита ваших данных
              </p>
              <Image
                src={"/image/catalog-banner.png"}
                width={400}
                height={110}
                alt="catalog"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-6xl mx-auto flex justify-between items-center py-16">
              <p className=" max-w-60 text-3xl font-bold">
                Защита ваших данных
              </p>
              <Image
                src={"/image/catalog-banner.png"}
                width={400}
                height={110}
                alt="catalog"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-6xl mx-auto flex justify-between items-center py-16">
              <p className=" max-w-60 text-3xl font-bold">
                Защита ваших данных
              </p>
              <Image
                src={"/image/catalog-banner.png"}
                width={400}
                height={110}
                alt="catalog"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-6xl mx-auto flex justify-between items-center py-16">
              <p className=" max-w-60 text-3xl font-bold">
                Защита ваших данных
              </p>
              <Image
                src={"/image/catalog-banner.png"}
                width={400}
                height={110}
                alt="catalog"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="max-w-6xl mx-auto flex justify-between items-center py-16">
              <p className=" max-w-60 text-3xl font-bold">
                Защита ваших данных
              </p>
              <Image
                src={"/image/catalog-banner.png"}
                width={400}
                height={110}
                alt="catalog"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
