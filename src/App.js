import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import RootLayout from "./pages/RootLayout";
import Departments from "./pages/Departments";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import NewProduct from "./pages/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/departments",
        element: <Departments />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/new",
        element: <NewProduct />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
