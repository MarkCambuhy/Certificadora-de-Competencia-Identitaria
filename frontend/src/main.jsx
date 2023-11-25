import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";

// Pages
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Write from "./pages/Write/Write";
import Post from "./pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup/createaccount",
    element: <Registration />,
  },
  {
    path: "/signin/identifier",
    element: <Login />,
  },
  {
    path: "/write",
    element: <Write />,
  },
  {
    path: '/post',
    element: <Post />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
