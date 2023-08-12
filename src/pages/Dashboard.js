import { useData } from "../context/dataContext";

export default function Dashboard() {
  const {
    dataState: { inventoryData },
  } = useData();

  const totalStock = inventoryData.reduce(
    (total, curr) => total + curr.stock,
    0
  );
  const totalDelivered = inventoryData.reduce(
    (total, curr) => total + curr.delivered,
    0
  );
  const lowStockItems = inventoryData.reduce(
    (items, curr) => (curr.stock <= 10 ? items + 1 : items),
    0
  );

  return (
    <main className="px-8 py-12 flex justify-center gap-6 items-center">
      <div className="flex flex-col items-center bg-slate-200 h-max p-4 rounded-lg gap-2">
        <p className="text-2xl font-Libre font-bold text-green-600">
          {totalStock}
        </p>
        <p className="font-bold font-Libre">Total Stock</p>
      </div>

      <div className="flex flex-col items-center bg-slate-200 h-max p-4 rounded-lg gap-2">
        <p className="text-2xl font-Libre font-bold text-orange-400">
          {totalDelivered}
        </p>
        <p className="font-bold font-Libre">Total Delivered</p>
      </div>

      <div className="flex flex-col items-center bg-slate-200 h-max p-4 rounded-lg gap-2">
        <p className="text-2xl font-Libre font-bold text-red-600">
          {lowStockItems}
        </p>
        <p className="font-bold font-Libre">Low Stock Items</p>
      </div>
    </main>
  );
}
