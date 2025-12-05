import { createBrowserRouter, Navigate } from "react-router-dom";
import { Root } from "../components/";
import { IFramePage } from "../pages";

export const SiteRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <div>HOME</div> },
      { path: "home", element: <Navigate to={"/"} replace /> },
      { path: "about", element: <div>ABOUT</div> },
      { path: "iframe", element: <IFramePage /> },
    ],
  },
]);
