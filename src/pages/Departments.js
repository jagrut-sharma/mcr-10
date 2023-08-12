import { useNavigate } from "react-router-dom";
import { useData } from "../context/dataContext";
import { ACTIONS } from "../utils/ACTIONS";

export default function Departments() {
  const { dataDispatch } = useData();
  const navigate = useNavigate();

  const handleClick = (value) => {
    dataDispatch({
      type: ACTIONS.APPLY_FILTER,
      payload: {
        category: "department",
        value: value,
      },
    });
    navigate("/products");
  };

  return (
    <main className="flex items-center justify-center gap-6 px-8 py-12 font-Libre">
      <button
        className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-200 p-6 hover:opacity-90"
        onClick={() => handleClick("Kitchen")}
      >
        <p className="text-2xl font-bold">Kitchen</p>
      </button>

      <button
        className="flex h-max flex-col  items-center gap-2 rounded-lg bg-slate-200 p-6 hover:opacity-90"
        onClick={() => handleClick("Clothing")}
      >
        <p className="text-2xl font-bold">Clothing</p>
      </button>

      <button
        className="flex h-max flex-col items-center gap-2 rounded-lg bg-slate-200 p-6"
        onClick={() => handleClick("Toys")}
      >
        <p className="text-2xl font-bold hover:opacity-90">Toys</p>
      </button>
    </main>
  );
}
