import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='flex gap-72 h-auto justify-around p-5'>
            <img className='w-10' src="/logoB.png" alt="Logo" />
            <ul className='flex gap-2 ml-96'>
                <li className='border border-white rounded-md flex items-center justify-center text-sm w-40 h-12'>
                    <Link className='text-white' to="/About">Quienes Somos</Link>
                </li>
                <li className='border border-white rounded-md flex items-center justify-center text-sm w-40 h-12'>
                    <Link className='text-white' to="/Integrantes">Integrantes</Link>
                </li>
                <li className='border border-white rounded-md flex items-center justify-center text-sm w-40 h-12'>
                    <Link className='text-white' to="/Proyectos">Proyectos</Link>
                </li>
            </ul>
        </nav>
    );
}


export { Navbar };