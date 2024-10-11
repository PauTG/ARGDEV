import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { Proyectos } from "./Componentes/Proyectos/Proyectos.jsx";
import Home from "./screens/index.jsx";
import About from "./screens/about.jsx";
import Members from "./screens/members.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Integrantes",
        element: <Members />,
      },
      {
        path: "/Proyectos",
        element: <Proyectos />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
