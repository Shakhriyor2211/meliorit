import { message, phone, time, location } from "../../utils/icon";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-zinc-800 text-white px-4">
      <div className="max-w-2md md:max-w-7xl mx-auto grid md:grid-cols-3 gap-x-4 gap-y-12 py-16">
        <ul className="space-y-3">
          <li className="opacity-50">
            <Link href={"/catalog"}>
              <a>Palo Alto Networks</a>
            </Link>
          </li>
          <li className="opacity-50">
            <Link href={"/catalog"}>
              <a>Какую модель выбрать?</a>
            </Link>
          </li>
          <li className="opacity-50">
            <Link href={"/catalog"}>
              <a>Prisma</a>
            </Link>
          </li>
          <li className="opacity-50">
            <Link href={"/catalog"}>
              <a>Cortex</a>
            </Link>
          </li>
        </ul>
        <ul className="space-y-3">
          <li className="opacity-50">
            <Link href={"/blog"}>
              <a>Блог</a>
            </Link>
          </li>
          <li className="opacity-50">
            <Link href={"/blog"}>
              <a>Статьи про Palo Alto Networksг</a>
            </Link>
          </li>
          <li className="opacity-50">
            <Link href={"/blog"}>
              <a>Политика Конфиденциальности</a>
            </Link>
          </li>
        </ul>
        <ul className="space-y-3">
          <li>
            <Link href="https://goo.gl/maps/oYVaampkZLNv18mRA">
              <a
                className="flex items-center space-x-3 opacity-50"
                target={"_blank"}
              >
                <div className="w-5 h-5 fill-teal-500 flex-shrink-0">
                  {location}
                </div>
                <span>
                  Адрес: 115201, Россия, Москва, Котляковская улица, 6, стр. 8
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"tel:+74994448180"}>
              <a className="flex items-center space-x-3 opacity-50">
                <div className="w-5 h-5 fill-teal-500 flex-shrink-0">
                  {phone}
                </div>
                <span>+7 (499) 444-81-80</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href={"mailto:hello@meliorit.ru"}>
              <a className="flex items-center space-x-3 opacity-50">
                <div className="w-5 h-5 fill-teal-500 flex-shrink-0">
                  {message}
                </div>
                <span>E-mail: hello@meliorit.ru</span>
              </a>
            </Link>
          </li>
          <li className="flex items-center space-x-3 opacity-50">
            <div className="w-5 h-5 fill-teal-500 flex-shrink-0">{time}</div>
            <span>Время работы: 9:00-18:30</span>
          </li>
        </ul>
        <div className="space-y-4 md:col-span-3">
          <hr className="opacity-20" />
          <p className="text-center text-sm opacity-20">
            Copyright © 2018 Meliorit.ru. Все права защищены. This site is
            protected by reCAPTCHA and the Google Privacy Policy and Terms of
            Service apply.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
