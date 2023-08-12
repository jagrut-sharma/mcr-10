import { NavLink } from "react-router-dom";

export default function Nav() {
  const getClass = ({ isActive }) => {
    return isActive ? "text-blue-600" : "text-slate-100";
  };

  return (
    <div className="flex flex-col gap-12 bg-black px-4 pt-[10rem] font-Libre text-xl font-bold">
      <NavLink to="/" className={getClass}>
        Dashboard
      </NavLink>
      <NavLink to={"/departments"} className={getClass}>
        Departments
      </NavLink>
      <NavLink to={"/products"} className={getClass} end>
        Products
      </NavLink>
    </div>
  );
}
