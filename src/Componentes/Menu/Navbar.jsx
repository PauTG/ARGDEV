import { Link } from "react-router-dom";

const MenuItem = ({ text, to }) => {
  return (
    <li className="flex items-center justify-center p-2 text-sm border border-white rounded-md md:p-4 h-min">
      <Link className="text-white text-nowrap" to={to}>
        {text}
      </Link>
    </li>
  );
};

function Navbar() {
  return (
    <nav className="flex flex-col items-center justify-between h-auto gap-4 p-5 md:flex-row">
      <img className="w-10" src="/logoB.png" alt="Logo" />
      <ul className="flex gap-2">
        <MenuItem text="Quienes Somos" to="/About" />
        <MenuItem text="Integrantes" to="/Integrantes" />
        <MenuItem text="Proyectos" to="/Proyectos" />
      </ul>
    </nav>
  );
}

export { Navbar };
