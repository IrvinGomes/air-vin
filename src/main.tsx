import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { SiteRoutes } from "./helpers/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={SiteRoutes} />
  </StrictMode>
);
