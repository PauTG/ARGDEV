import { Navbar } from "./Componentes/Menu/Navbar";
import { Footer } from "./Componentes/Footer/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
<div className="bg-[url(/Fondo.png)] bg-center bg-cover min-h-screen">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
