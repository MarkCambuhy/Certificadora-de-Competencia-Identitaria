import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";

// Pages
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
