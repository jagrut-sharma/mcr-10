import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const getClass = ({ isActive }) => {
    return isActive ? "text-blue-600" : "text-slate-100";
  };

  return (
    <div className="flex gap-12 font-Libre text-xl font-bold flex-col p-4 justify-center bg-black">
      <NavLink to="/" className={getClass}>
        Dashboard
      </NavLink>
      <NavLink to={"/departments"} className={getClass}>
        Departments
      </NavLink>
      <NavLink to={"/products"} className={getClass}>
        Products
      </NavLink>
    </div>
  );
}
