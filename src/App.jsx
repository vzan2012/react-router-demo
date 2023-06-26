import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/products", element: <ProductsPage /> },
];

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
