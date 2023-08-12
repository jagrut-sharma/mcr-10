export default function NewProduct() {
  return (
    <main className="p-8 font-Libre">
      <h1 className="text-3xl font-bold">Add New Product</h1>

      <div className="my-8 flex w-3/5 flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="department">Department:</label>
          <select
            name="department"
            id="department"
            className="w-[50%] rounded border-2 border-gray-700 px-[5px]"
          >
            <option value="select">Select Department</option>
            <option value="Kitchen">Kitchen</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="w-[50%] rounded border-2 border-gray-700 px-[5px]"
            id="name"
            name="name"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="w-[50%] rounded border-2 border-gray-700 px-[5px]"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="w-[50%] rounded border-2 border-gray-700 px-[5px]"
            id="price"
            name="price"
            min={0}
            placeholder="0"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            className="w-[50%] rounded border-2 border-gray-700 px-[5px]"
            id="stock"
            name="stock"
            min={0}
            placeholder="0"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="sku">SKU:</label>
          <input
            type="text"
            className="w-[50%] rounded border-2 border-gray-700 px-[5px]"
            id="sku"
            name="sku"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="supplier">Supplier:</label>
          <input
            type="text"
            className="w-[50%] rounded border-2 border-gray-700 px-[5px]"
            id="supplier"
            name="supplier"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            className="w-[50%] rounded border-2 border-gray-700 px-[5px]"
            id="imageUrl"
            name="imageUrl"
          />
        </div>

        <button className="mt-3 w-max rounded-md bg-blue-600 p-2 px-4 text-base text-slate-200 hover:opacity-90">
          Add Product
        </button>
      </div>
    </main>
  );
}
