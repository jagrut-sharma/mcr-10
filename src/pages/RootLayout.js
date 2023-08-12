import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function RootLayout() {
  return (
    <div className="grid grid-rows-rootLayout min-h-screen">
      <div className="grid grid-cols-rootColLayout">
        <Nav />
        <Outlet />
      </div>
    </div>
  );
}
