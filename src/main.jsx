import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/root/Root";
import Home from "./components/home/Home";
import About from "./components/about/About";
import WhoIsItFor from "./components/whoIsItFor/WhoIsItFor";
import HowItWorks from "./components/howItWorks/HowItWorks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/who",
        element: <WhoIsItFor></WhoIsItFor>,
      },
      {
        path: "/how",
        element: <HowItWorks></HowItWorks>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
