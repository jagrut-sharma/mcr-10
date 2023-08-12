import { Link } from "react-router-dom";
import { useData } from "../context/dataContext";
import { ACTIONS } from "../utils/ACTIONS";
import { getFilteredList } from "../utils/constants";

export default function Products() {
  const {
    dataState: { inventoryData, filtersVal },
    dataDispatch,
  } = useData();

  const handleChange = (e) => {
    dataDispatch({
      type: ACTIONS.APPLY_FILTER,
      payload: {
        category: e.target.name,
        value: e.target.name === "lowStock" ? e.target.checked : e.target.value,
      },
    });
  };

  const filteredList = getFilteredList(inventoryData, filtersVal);

  return (
    <main className="px-4 py-8">
      <div className="mr-2 flex items-center justify-between p-2">
        <h2 className="text-3xl font-bold">Products</h2>

        <select
          name="department"
          id="department"
          className="rounded border-2 border-gray-700 px-[5px]"
          value={filtersVal.department}
          onChange={handleChange}
        >
          <option value="all">All Departments</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="lowStock"
            id="lowStock"
            onChange={handleChange}
            checked={filtersVal.lowStock}
          />
          <label htmlFor="lowStock" className="text-lg">
            Low Stock Item
          </label>
        </div>

        <select
          name="sort"
          id="sort"
          className="rounded border-2 border-gray-700 px-[5px]"
          value={filtersVal.sort}
          onChange={handleChange}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>

        <Link
          to={"/new"}
          className="rounded-md bg-blue-600 px-3 py-1 text-base text-slate-200 hover:opacity-90"
        >
          New
        </Link>
      </div>

      <div>
        <table className="min-w-full">
          <thead>
            <tr className="border-b bg-gray-300">
              <th className="px-4 py-2 text-center">Image</th>
              <th className="px-4 py-2 text-center">Name</th>
              <th className="px-4 py-2 text-center">Description</th>
              <th className="px-4 py-2 text-center">Price</th>
              <th className="px-4 py-2 text-center">Stock</th>
              <th className="px-4 py-2 text-center">Supplier</th>
            </tr>
          </thead>
          <tbody>
            {filteredList.map((product) => (
              <tr key={product.id} className="border-b text-center">
                <td className="px-4 py-2">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-16"
                  />
                </td>
                <td className="px-4 py-2">
                  <Link to={`/products/${product.id}`}>{product.name}</Link>
                </td>
                <td className="px-4 py-2">{product.description}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2">{product.stock}</td>
                <td className="px-4 py-2">{product.supplier}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
