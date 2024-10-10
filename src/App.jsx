import { Navbar } from "./Componentes/Menu/Navbar";
import { Footer } from "./Componentes/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-[url(/Fondo.png)] bg-no-repeat bg-cover bg-center"></div>
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
