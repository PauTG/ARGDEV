import { Navbar } from "./Componentes/Menu/Navbar";
import { Footer } from "./Componentes/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <div className="bg-[url(/Fondo.png)] w-screen h-screen fixed inset-0 -z-10 bg-no-repeat bg-cover bg-center"></div>
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
