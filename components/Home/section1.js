import Button from "../button";
import Link from "next/link";

function Section1() {
  return (
    <main className="flex flex-col px-4">
      <div className="flex-1 grid md:grid-cols-2 place-content-center max-w-7xl mx-auto mb-12 mt-20 lg:mt-32">
        <Left />
        <Right />
      </div>
    </main>
  );
}

export default Section1;

function Left() {
  return (
    <div className="max-w-md space-y-8 flex flex-col justify-center">
      <p className="text-5xl font-bold">
        Межсетевые экраны <span className="">нового</span> поколения
      </p>
      <p>
        Сократите затраты на обеспечение информационной безопасности и окупите
        вложения уже через шесть месяцев
      </p>
      <div>
        <Link href={"/catalog"}>
          <a className="inline-block">
            <Button
              text={"В каталог"}
              styleClass={
                "flex shadow-md items-center space-x-2 py-2 px-4 bg-teal-500 rounded text-white trasinition-all duration-300 group lg:hover:bg-teal-400"
              }
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className="hidden md:block">
      <img src="/image/home.png" alt="home" />
    </div>
  );
}
