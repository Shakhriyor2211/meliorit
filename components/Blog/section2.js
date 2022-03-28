import Image from "next/image";
import Link from "next/link";
import Organization from "../organization";

function Section2() {
  return (
    <>
      <section className="max-w-3xl lg:max-w-7xl mx-auto my-12 space-y-6">
        <p className="text-2xl font-bold text-center lg:text-left lg:w-36">
          Примеры реализации
        </p>
        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="max-w-lg flex-1 flex flex-col sm:flex-row sm:items-end space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-16">
            <div className="flex sm:flex-col sm:py-16 order-1 sm:order-none space-x-3 sm:space-x-0 sm:space-y-3">
              <Sphere text={"FinanceLine"} />
              <Sphere text={"Curry"} />
              <Sphere text={"Indica"} />
              <Sphere text={"IT-General"} />
            </div>
            <Image
              src="/image/blog/Group 3.png"
              alt="blog"
              width={"300"}
              height={"300"}
            />
          </div>
          <div className="flex-1">
            <p>
              Компания Palo Alto Networks — создатель уникальных межсетевых
              экранов нового поколения. Продукт дает возможность распознать
              любое приложение, не взирая на то, какие способы шифрования
              используются. Кроме того, осуществляется контроль непосредственно
              пользователей, а не IP-адресов. Palo Alto Networks являются
              лидерами по производству систем сетевой безопасности и уже седьмой
              раз подряд занимают первое место среди производителей межсетевых
              экранов для средних и крупных организаций. Благодаря работе
              специального оборудования и ПО достигается высокий уровень
              безопасности инфраструктуры.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto my-12">
        <Organization />
      </section>
    </>
  );
}

export default Section2;

function Sphere(props) {
  return (
    <Link href={"#"}>
      <a>
        <p className="transition-all duration-300 text-xs sm:text-base rounded-full p-2 text-center bg-gray-300 border-2 border-gray-300 lg:hover:bg-white lg:hover:border-teal-500 inline-block">
          {props.text}
        </p>
      </a>
    </Link>
  );
}
