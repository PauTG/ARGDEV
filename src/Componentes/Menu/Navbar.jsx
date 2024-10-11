import { Link } from "react-router-dom";

const MenuItem = ({ text, to }) => {
  return (
    <li className="flex items-center justify-center text-sm border border-white rounded-md h-min">
      <Link className="text-white text-nowrap p-2 md:p-4" to={to}>
        {text}
      </Link>
    </li>
  );
};

function Navbar() {
  return (
 <nav className="flex flex-col items-center justify-between h-auto gap-4 p-5 md:flex-row">
            <a href="https://argentinadeveloper.vercel.app/">
                <img className="w-10 cursor-pointer" src="/logoB.png" alt="Logo" />
            </a>
            <ul className="flex gap-2">
                <MenuItem text="Quienes Somos" to="/About" />
                <MenuItem text="Integrantes" to="/Integrantes" />
                <MenuItem text="Proyectos" to="/Proyectos" />
            </ul>
        </nav>
  );
}

export { Navbar };

