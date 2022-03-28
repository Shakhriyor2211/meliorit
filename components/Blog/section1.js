import Button from "../button";
import Slider from "../carousel";
import Link from "next/link";
function Section1() {
  return (
    <>
      <section className="max-w-2xl lg:max-w-7xl mx-auto flex flex-col mt-24  lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 justify-between lg:mt-44">
        <div className="space-y-12">
          <img className="" src="/image/blog/blog-name.png" alt="blog" />
          <div className="space-y-6 max-w-xl">
            <p className="text-4xl font-bold">Palo Alto Networks</p>
            <p>
              Американская компания, оказывающая услуги в области информационной
              безопасности. Занимается разработкой межсетевых экранов и облачных
              решений.
            </p>
            <Link href={{ pathname: "/catalog", query: "Блог" }}>
              <a className="inline-block">
                <Button
                  text={"Смотреть каталог"}
                  styleClass={
                    "flex shadow-md items-center space-x-2 py-3 px-4 bg-teal-500 rounded text-white trasinition-all duration-300 group lg:hover:bg-teal-400"
                  }
                />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <video
            className="rounded-lg outline-none object-cover"
            poster="/video/blog-poster.png"
            width={"640"}
            height={"320"}
            controls
          >
            <source src="/video/blog.mkv" type="video/mkv"></source>
            <source src="/video/blog.mp4" type="video/mp4"></source>
          </video>
        </div>
      </section>
      <section className="my-20 flex flex-col lg:flex-row items-center justify-between max-w-7xl space-y-8 lg:space-y-0 lg:space-x-8 mx-auto">
        <div className="max-w-xm flex flex-col items-center">
          <img className="w-48 h-60" src="/image/blog/blog 1.png" alt="blog" />
          <p className="text-center text-lg font-bold">
            Лидер среди производителей межсетевых экранов
          </p>
          <p className="text-center">
            Занимает первое место среди производителей межсетевых экранов на
            протяжении семи лет
          </p>
        </div>
        <div className="max-w-xm flex flex-col items-center">
          <img className="w-48 h-60" src="/image/blog/blog 2.png" alt="blog" />
          <p className="text-center text-lg font-bold">
            Обширная сеть клиентов по всему миру
          </p>
          <p className="text-center">
            Palo Alto выбирают более 70 000 организаций в разных отраслях
            промышленности
          </p>
        </div>
        <div className="max-w-xm flex flex-col items-center">
          <img className="w-48 h-60" src="/image/blog/blog 3.png" alt="blog" />
          <p className="text-center text-lg font-bold">
            Полная визуализация и контроль всех приложений
          </p>
          <p className="text-center">
            Осуществляет контроль всех приложений и контента по пользователю, а
            не по IP-адресу или порту без потери производительности
          </p>
        </div>
      </section>
      <Slider />
    </>
  );
}

export default Section1;
