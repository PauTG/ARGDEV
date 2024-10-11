import { Link } from "react-router-dom";

const MenuItem = ({ text, to }) => {
  return (
    <li className="flex items-center justify-center text-sm border border-white rounded-md h-min">
      <Link className="p-2 text-white text-nowrap md:p-4" to={to}>
        {text}
      </Link>
    </li>
  );
};

function Navbar() {
  return (
    <nav className="flex flex-col items-center justify-between h-auto gap-4 p-5 md:flex-row">
      <Link to="/">
        <img className="w-36 cursor-pointer" src="/LogoEntero.png" alt="Logo" />
      </Link>
      <ul className="flex gap-2">
        <MenuItem text="Quienes Somos" to="/About" />
        <MenuItem text="Integrantes" to="/Integrantes" />
        <MenuItem text="Proyectos" to="/Proyectos" />
      </ul>
    </nav>
  );
}

export { Navbar };
