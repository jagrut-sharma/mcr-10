import { useData } from "../context/dataContext";

export default function Dashboard() {
  const {
    dataState: { inventoryData },
  } = useData();

  const totalStock = inventoryData.reduce(
    (total, curr) => total + curr.stock,
    0,
  );
  const totalDelivered = inventoryData.reduce(
    (total, curr) => total + curr.delivered,
    0,
  );

  const lowStockItems = inventoryData.reduce(
    (items, curr) => (curr.stock <= 10 ? items + 1 : items),
    0,
  );

  return (
    <main className="flex items-center justify-center gap-6 px-8 py-12">
      <div className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-200 p-4">
        <p className="font-Libre text-2xl font-bold text-green-600">
          {totalStock}
        </p>
        <p className="font-Libre font-bold">Total Stock</p>
      </div>

      <div className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-200 p-4">
        <p className="font-Libre text-2xl font-bold text-orange-400">
          {totalDelivered}
        </p>
        <p className="font-Libre font-bold">Total Delivered</p>
      </div>

      <div className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-200 p-4">
        <p className="font-Libre text-2xl font-bold text-red-600">
          {lowStockItems}
        </p>
        <p className="font-Libre font-bold">Low Stock Items</p>
      </div>
    </main>
  );
}
