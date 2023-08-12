import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import RootLayout from "./pages/RootLayout";
import Departments from "./pages/Departments";
import Products from "./pages/Products";
import Dashboard from "./pages/Dashboard";
import NewProduct from "./pages/NewProduct";
import ProductRootLayout from "./pages/ProductRootLayout";
import SingleProductPage from "./pages/SingleProductPage";

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
        element: <ProductRootLayout />,
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":productID",
            element: <SingleProductPage />,
          },
        ],
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
