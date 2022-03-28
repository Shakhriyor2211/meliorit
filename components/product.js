import Image from "next/image";
import { productData1, productData2 } from "../utils/db";

function Items({ data, itemState, favor }) {
  const product = productData1.concat(productData2);
  return (
    <div className="max-w-4xl flex flex-col space-y-2">
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="border-2 rounded flex items-center p-4 justify-between space-x-2"
          >
            <div className="flex space-x-2 items-center">
              <div className="max-w-s sm:max-w-none">
                <Image src={item.imageURL} width={200} height={70} alt="cart" />
              </div>
              <p className="sm:text-xl font-semibold flex-shrink-0">
                {item.title}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <button className="bg-teal-500 lg:hover:scale-95 transition-transform duration-400 text-auto text-white px-4 py-2 sm:px-8 sm:py-3 rounded">
                Купить
              </button>
              <button
                className="bg-red-500 lg:hover:scale-95 transition-transform duration-400 text-auto text-white px-4 py-2 sm:px-8 sm:py-3 rounded"
                onClick={() => {
                  const newValue = data.filter((value) => value.id !== item.id);
                  itemState(newValue);
                  favor && (product[item.id].star = false);
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Пусто</p>
      )}
    </div>
  );
}

export default Items;
