import Link from "next/link";
function Organization() {
  return (
    <div className="flex justify-evenly sm:bg-gradient-to-b from-blue-500 to-green-300 sm:h-95 rounded-xl w-full">
      <div className="hidden lg:block relative -top-6">
        <img className="h-100" src="/image/home-banner.png" alt="home" />
      </div>
      <div className="self-center space-y-8 rounded-xl bg-white p-8 sm:shadow-xl">
        <div className="space-y-3">
          <p className="text-2xl font-semibold leading-6">
            Помощь в подборе
            <br /> модели
          </p>
          <p>Сколько сотрудников в вашей организации?</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Stuff text={"Меньше 10"} />
          <Stuff text={"от 10 до 100"} />
          <Stuff text={"от 100 до 1000"} />
          <Stuff text={"больше 1000"} />
        </div>
      </div>
    </div>
  );
}

export default Organization;
function Stuff(props) {
  return (
    <Link href="#">
      <a className="rounded border-2 py-2 bg-opacity-0 bg-red-500 text-center transition-all duration-500 lg:hover:border-teal-500 lg:hover:bg-teal-500 lg:hover:text-white group">
        {props.text}
      </a>
    </Link>
  );
}
