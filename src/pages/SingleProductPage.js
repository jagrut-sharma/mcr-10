import { useParams } from "react-router-dom";
import { useData } from "../context/dataContext";

export default function SingleProductPage() {
  const {
    dataState: { inventoryData },
  } = useData();

  const { productID } = useParams();

  const product = inventoryData.find(({ id }) => id === +productID);

  return (
    <main className="flex flex-col gap-2 p-8 font-Libre">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <div className="h-[20rem] w-[20rem]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="inline-block h-full w-full object-contain"
        />
      </div>

      <p>
        <span className="font-bold">Price: </span> ${product.price}
      </p>

      <p>
        <span className="font-bold">Stock: </span> {product.stock}
      </p>
      <p>
        <span className="font-bold">Supplier: </span> {product.supplier}
      </p>
      <p>
        <span className="font-bold">Department: </span> {product.department}
      </p>
      <p>
        <span className="font-bold">SKU: </span> {product.sku}
      </p>
      <p>
        <span className="font-bold">Delivered: </span> {product.delivered}
      </p>
      <p>
        <span className="font-bold">Description: </span> {product.description}
      </p>
    </main>
  );
}
