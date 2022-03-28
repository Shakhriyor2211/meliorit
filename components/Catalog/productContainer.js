import { productData1, productData2 } from "../../utils/db";
import ProductCard from "../card";

function ProductContainer({ active }) {
  const data = active ? productData1 : productData2;
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-fit mx-auto">
      {data.map((data, i) => {
        return (
          <ProductCard
            key={active ? i : i + 16}
            id={active ? i : i + 16}
            data={data}
          />
        );
      })}
    </div>
  );
}

export default ProductContainer;
