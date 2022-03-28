import Button from "../button";
import Input from "../input";
import Slider from "../carousel";
import { useState } from "react";
function Section2() {
  return (
    <section className="flex flex-col px-4">
      <Top />
      <Bottom />
    </section>
  );
}

export default Section2;

function Top() {
  const [value, setValue] = useState("");
  return (
    <div className="grid md:grid-cols-2 max-w-7xl mx-auto">
      <div className="hidden md:flex items-center md:justify-end">
        <img src="/image/home.png" alt="home" />
      </div>
      <div className="flex items-center justify-center">
        <div className="space-y-8 p-12 max-w-sm rounded sm:shadow-lg">
          <p className="text-4xl font-bold">Помощь в выборе модели</p>
          <p className="text-lg">Сколько компьютеров в вашей локальной сети?</p>
          <form className="flex flex-col sm:space-x-2 space-y-2 sm:space-y-0 sm:flex-row justify-between">
            <div>
              <Input
                type={"number"}
                styleClass={
                  "outline-none w-full border-2 sm:w-32 rounded border-gray-500 focus:border-teal-400 p-2"
                }
                valueState={setValue}
              />
            </div>
            <Button
              text={"Продолжить"}
              styleClass={
                "flex shadow-md justify-center items-center space-x-2 py-2 px-4 bg-teal-500 rounded text-white trasinition-all duration-300 group lg:hover:bg-teal-400"
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <>
      <Slider />
    </>
  );
}
