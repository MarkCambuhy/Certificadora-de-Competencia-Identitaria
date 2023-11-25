import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./global.css";

// Pages
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Write from "./pages/Write/Write";
import Profile from "./pages/Profile/Profile";

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
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
