export default function Departments() {
  return (
    <main className="flex items-center justify-center gap-6 px-8 py-12 font-Libre">
      <button className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-200 p-6 hover:opacity-90">
        <p className="text-2xl font-bold">Kitchen</p>
      </button>

      <button className="flex h-max flex-col  items-center gap-2 rounded-lg bg-slate-200 p-6 hover:opacity-90">
        <p className="text-2xl font-bold">Clothing</p>
      </button>

      <button className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-200 p-6">
        <p className="text-2xl font-bold hover:opacity-90">Toys</p>
      </button>
    </main>
  );
}
