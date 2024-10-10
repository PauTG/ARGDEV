import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const integrantesData = [
    { name: "Nicolas Suarez", role: "Owner Back-end", img: "/NicoL.png" },
    { name: "Paula Gonzalez", role: "Administrador Front-end", img: "/PaulaL.png" },
    { name: "Esteban Sayago", role: "Colaborador Front-end", img: "/EstebanL.png" },
    { name: "Matias Colazo", role: "Colaborador Front-end", img: "/MatiasL.png" },
    { name: "Brahian Pereyra", role: "Colaborador Back-end", img: "/BrahianL.png" },
    { name: "Javier Rodriguez", role: "Colaborador Front-end", img: "/JavierL.png" },
    { name: "Alan Farias", role: "Colaborador Back-end", img: "/AlanL.png" },
    { name: "Nahuel Garrido", role: "Colaborador Back-end", img: "/NahuelL.png" },
    { name: "Manuel Burgos", role: "Colaborador Back-end", img: "/ManuelL.png" },
    { name: "Alan Cejas", role: "Colaborador Back-end", img: "/AlanCL.png" },
    { name: "Franco Caviglia", role: "Colaborador Back-end", img: "/FrancoL.png" },
    { name: "Antonella Vincenti", role: "Colaborador QA", img: "/AntonellaL.png" },


];

const Integrantes = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = integrantesData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(integrantesData.length / itemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className='text-center w-full p-5 h-auto m-8 flex px-24 text-white'>
            <div className='border border-white rounded-md w-full p-4 h-full flex px-24 md:container flex-col backdrop-blur-3xl'>
                <div className='w-auto text-white text-center text-4xl italic m-3'>
                    <p> Dream Team ☁</p>
                </div>

                <div className='m-9 mt-6 flex flex-wrap gap-4 justify-between'>
                    {currentItems.map((integrante, index) => (
                        <div key={index} className='border border-white rounded-md w-5/12 h-32 text-center p-2 flex backdrop-blur-lg mb-9'>
                            <img className='h-28 mr-4 rounded-full' src={integrante.img} alt={integrante.name} />
                            <div className='flex flex-col text-left justify-center font-medium'>
                                <p>{integrante.name}</p>
                                <p className='italic'>{integrante.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center '>
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`mx-1 px-2 py-1 rounded-md ${currentPage === i + 1 ? 'bg-white text-black' : 'bg-gray-700 text-white'} hover:bg-gray-600`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export { Integrantes };
