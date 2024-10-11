import { Navbar } from "./Componentes/Menu/Navbar";
import { Footer } from "./Componentes/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[url(/FondoA.jpg)] bg-center bg-cover bg-no-repeat min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
