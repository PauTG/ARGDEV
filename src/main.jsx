import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { RouterProvider } from 'react-router-dom';
import { Sobre } from './Componentes/Sobre/Sobre';
import { createBrowserRouter } from 'react-router-dom';
import { Titulo } from './Componentes/Titulo/Titulo.jsx';
import { Integrantes } from './Componentes/Integrantes/Integrantes.jsx';
import { Proyectos } from './Componentes/Proyectos/Proyectos.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, element: <Titulo />
      }
      , {
        path: '/About',
        element: <Sobre />
      }
      , {
        path: '/Integrantes',
        element: <Integrantes />
      }
      , {
        path: '/Proyectos',
        element: <Proyectos />
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

