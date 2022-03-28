import Link from "next/link";
import { useState, useContext } from "react";
import {
  arrow,
  cart,
  star,
  openMenu,
  closeMenu,
  messanger,
} from "../../utils/icon";
import { CartContext, FavoriteContext } from "../../utils/context";

function Header() {
  let [visible, setVisible] = useState(true);
  const menu = () => {
    setVisible(!visible);
  };
  return (
    <header className="px-4 text-zinc-800 shadow-sm bg-white shadow-gray-400 fixed inset-x-0 z-50">
      <div className="flex items-center space-x-4 max-w-7xl mx-auto">
        <div className="block lg:hidden">
          <div className="cursor-pointer w-7 h-7 select-none" onClick={menu}>
            {openMenu}
          </div>
          <div
            className={`fixed inset-0 backdrop-blur-sm bg-white/30 z-30 ${
              !visible ? "visible" : "invisible"
            }`}
            onClick={menu}
          ></div>
          <div
            className={`fixed inset-y-0 left-0 px-7 py-7 shadow-slate-800 bg-white z-30 transition-all duration-300 ${
              !visible ? "shadow-lg translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex space-x-3 h-full">
              <div className="flex flex-col justify-between">
                <Mobile />
                <div className="flex space-x-2">
                  <Link href={"#"}>
                    <a className="w-6 h-6">{messanger.instagram}</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="w-6 h-6">{messanger.facebook}</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="w-6 h-6">{messanger.twitter}</a>
                  </Link>
                  <Link href={"#"}>
                    <a className="w-6 h-6">{messanger.youtube}</a>
                  </Link>
                </div>
              </div>
              <div
                className="cursor-pointer w-6 h-6 select-none"
                onClick={menu}
              >
                {closeMenu}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-1 justify-center lg:justify-start">
          <Link href={"/"}>
            <a className="flex items-center">
              <div className="flex items-center pr-4">
                <img
                  className="w-16 h-16"
                  src="/icons/favicon.png"
                  alt="header"
                />
                <span className="text-2xl -ml-2 uppercase font-bold">
                  eliorit
                </span>
              </div>
              <p className="hidden xl:block text-sm pl-4 text-gray-600 leading-5 border-l-2 border-gray-400">
                Официальный поставщик
                <br /> Palo Alto и Fortinet в России
              </p>
            </a>
          </Link>
          <Messenger />
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;

function Navigation() {
  const { cartItem } = useContext(CartContext);
  const { starItem } = useContext(FavoriteContext);
  return (
    <div className="flex items-center lg:space-x-6">
      <ul className="hidden lg:flex items-center space-x-6 font-medium">
        <li className="group">
          <Link href={"/"}>
            <a className="py-8 flex items-center space-x-3 group lg:hover:text-teal-400">
              <span>Межсетевые экраны</span>
              <span className="w-3 h-3 py-px text-teal-500 transition-all duration-300 transform group-hover:-rotate-180">
                {arrow}
              </span>
            </a>
          </Link>
          <DropDown dropNav={["CORTEX", "PRISMA", "ТЕХНОЛОГИИ"]} />
        </li>
        <li className="group">
          <Link href={"/blog"}>
            <a className="py-8 flex items-center space-x-3 group lg:hover:text-teal-400">
              <span>Блог</span>
              <span className="w-3 h-3 py-px text-teal-500 transition-all duration-300 transform group-hover:-rotate-180">
                {arrow}
              </span>
            </a>
          </Link>
          <DropDown
            dropNav={["СТАТЬИ ПРО PALO ALTO NETWORKS", "ПОЛЕЗНЫЕ СТАТЬИ"]}
          />
        </li>
        <li className="group">
          <Link href={"/about"}>
            <a className="py-8 flex items-center space-x-3 group lg:hover:text-teal-400">
              <span>О компании</span>
              <span className="w-3 h-3 py-px text-teal-500 transition-all duration-300 transform group-hover:-rotate-180">
                {arrow}
              </span>
            </a>
          </Link>
          <DropDown dropNav={["КОНТАКТЫ"]} />
        </li>
      </ul>
      <div className="space-x-4 flex-shrink-0 flex items-center">
        <Link href={"/favorite"}>
          <a className="w-5 h-5 block fill-zinc-800 lg:hover:fill-teal-400 relative">
            {star}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center py-1 px-2 text-xs font-bold leading-none text-teal-100 transform translate-x-1/2 -translate-y-1/2 bg-teal-500 rounded-full">
              {starItem.length}
            </span>
          </a>
        </Link>
        <Link href={"/cart"}>
          <a className="w-5 h-5 block fill-zinc-800 lg:hover:fill-teal-400 relative">
            {cart}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center py-1 px-2 text-xs font-bold leading-none text-teal-100 transform translate-x-1/2 -translate-y-1/2 bg-teal-500 rounded-full">
              {cartItem.length}
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}
function Mobile() {
  return (
    <ul className="flex flex-col space-y-4 font-medium">
      <li>
        <Link href={"/"}>
          <a className="pr-8 block">Межсетевые экраны</a>
        </Link>
      </li>
      <li>
        <Link href={"/blog"}>
          <a className="pr-8 block">Блог</a>
        </Link>
      </li>
      <li>
        <Link href={"/about"}>
          <a className="pr-8 block">О компании</a>
        </Link>
      </li>
    </ul>
  );
}

function DropDown(props) {
  return (
    <div className="transition-all duration-700 -z-10 -translate-y-80 group-hover:translate-y-0 absolute inset-x-0 top-full cursor-default border-2 border-y-teal-500 bg-teal-900 opacity-80 text-white group-hover:block">
      <ul className="py-16 max-w-7xl mx-auto text-xl flex justify-evenly">
        {props.dropNav.map((nav, i) => (
          <li key={i}>
            <Link href={"/home"}>
              <a className="lg:hover:text-teal-400 transition-all duration-300">
                {nav}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
function Messenger() {
  return (
    <div className="hidden lg:flex space-x-3 absolute top-full -z-20 p-4 shadow-sm rounded-b bg-white shadow-gray-400">
      <Link href={"#"}>
        <a className="w-6 h-6 block">{messanger.instagram}</a>
      </Link>
      <Link href={"#"}>
        <a className="w-6 h-6 block">{messanger.facebook}</a>
      </Link>
      <Link href={"#"}>
        <a className="w-6 h-6 block">{messanger.twitter}</a>
      </Link>
      <Link href={"#"}>
        <a className="w-6 h-6 block">{messanger.youtube}</a>
      </Link>
    </div>
  );
}
