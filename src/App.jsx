import { Navbar } from "./Componentes/Menu/Navbar";
import { Footer } from "./Componentes/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[url(/Fondo.png)] bg-center bg-cover bg-no-repeat min-h-screen overflow-hidden">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};


export default App;
