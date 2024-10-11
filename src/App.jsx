import { Navbar } from "./Componentes/Menu/Navbar";
import { Footer } from "./Componentes/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-[url(/FondoA.jpg)] bg-center bg-cover bg-no-repeat min-h-screen flex flex-col" style={{
      background: "radial-gradient(50% 50% at 50% 50%, #0E4F75 0%, #0D272F 100%)"
    }}>
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
