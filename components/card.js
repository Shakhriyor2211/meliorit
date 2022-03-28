import { useState, useContext } from "react";
import Link from "next/link";
import { cart, star, starFilled } from "../utils/icon";
import { CartContext, FavoriteContext } from "../utils/context";

function ProductCard({ data, id }) {
  const { cartItem, setCartItem } = useContext(CartContext);
  const { starItem, setStarItem } = useContext(FavoriteContext);

  const changeStar = (e) => {
    e.preventDefault();
    e.stopPropagation();
    data.star = !data.star;

    if (data.star == true) {
      if (starItem.some((item) => item.id === data.id)) {
        return;
      }
      const newValue = [...starItem];
      newValue.push(data);
      setStarItem(newValue);
    } else {
      const newValue = starItem.filter((item) => item.id !== data.id);
      setStarItem(newValue);
    }
  };
  return (
    <Link href={`/detail/${id}`}>
      <a className="flex h-85 flex-col max-w-x p-6 rounded-xl justify-between transition-all duration-500 border-2 border-gray-300 lg:hover:border-teal-500 lg:hover:text-teal-500">
        <div>
          <div className="flex justify-between items-center">
            <p className="lg:text-lg font-bold">{data.title}</p>
            <button className="w-5 h-5 fill-teal-500" onClick={changeStar}>
              {!data.star ? star : starFilled}
            </button>
          </div>
          <p className="text-xs text-zinc-800">{data.detail}</p>
        </div>

        <div className="flex justify-center">
          <img src={data.imageURL} alt="product" />
        </div>
        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <div className="max-w-s">
              <p className="text-xs  text-zinc-800">{data.info.left[0]}</p>
              <p className="font-bold text-sm"> {data.info.left[1]}</p>
            </div>
            <div className="max-w-s">
              <p className="text-xs  text-zinc-800">{data.info.right[0]}</p>
              <p className="font-bold text-sm"> {data.info.right[1]}</p>
            </div>
          </div>
          <button
            className="relative z-10 flex items-center justify-center space-x-2 py-3 rounded border-2 border-teal-500 transition-all duration-500 group lg:hover:bg-teal-500"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              if (cartItem.some((items) => data.id === items.id)) {
                return;
              }
              const newValue = [...cartItem];
              newValue.push(data);
              setCartItem(newValue);
            }}
          >
            <div className="fill-teal-500 lg:group-hover:fill-white w-5 h-5">
              {cart}
            </div>
            <p className="text-teal-500 lg:group-hover:text-white">В корзину</p>
          </button>
        </div>
      </a>
    </Link>
  );
}

export default ProductCard;
