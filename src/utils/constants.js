import { inventoryData } from "./data";

export const initialProductFormData = {
  department: "select",
  name: "",
  description: "",
  price: 0,
  stock: 0,
  sku: "",
  supplier: "",
  imageUrl: "",
};

export const initialFilterVal = {
  lowStock: false,
  sort: "name",
  department: "all",
};

const departmentFilter = (inventory, filterVal) => {
  if (filterVal.department === "all") return inventory;

  return inventory.filter(
    ({ department }) => department === filterVal.department,
  );
};

const lowStockFilter = (inventory, filterVal) => {
  return filterVal.lowStock
    ? inventory.filter(({ stock }) => stock <= 10)
    : inventory;
};

const sortFilter = (inventory, filterVal) => {
  const inventoryCopy = [...inventory];
  if (filterVal.sort === "price") {
    inventoryCopy.sort((a, b) => Number(a.price) - Number(b.price));
  } else if (filterVal.sort === "stock") {
    inventoryCopy.sort((a, b) => Number(a.stock) - Number(b.stock));
  } else {
    inventoryCopy.sort((a, b) => a.name.localeCompare(b.name));
  }

  return inventoryCopy;
};

const filterFunctions = [departmentFilter, lowStockFilter, sortFilter];

export const getFilteredList = (inventory, filterVal) =>
  filterFunctions.reduce(
    (acc, currFunc) => currFunc(acc, filterVal),
    inventory,
  );
