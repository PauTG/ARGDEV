import React from 'react';

function Proyectos() {
    const proyectosData = [
        { img: "/GBD.png", title: "Ghiblidoro", desc1: "Pomodoro Timer con temática de Studio Ghibli", desc2: "Creador: Paula González", link: "https://ghiblidoro.vercel.app/" },
        { img: "/MoviesApp.png", title: "Movies APP", desc1: "Página de peliculas", desc2: "Creador: Esteban Sayago", link: "https://pagina-peliculas-zeta.vercel.app/" },
        { img: "/TDU.png", title: "TDU Tienda", desc1: "Tienda de uñas", desc2: "Creador: Matias Colazo", link: "https://www.valesosa.com.ar/inicio" },
        { img: "/SD.png", title: "Simon", desc1: "Juego dinámico de Simón dice", desc2: "Creador: Javier Rodriguez", link: "https://simon-says-self.vercel.app/" },
        { img: "/AC.png", title: "Ahorcado", desc1: "Juego dinámico de el ahorcado", desc2: "Creador: Alan Cejas", link: "https://alandcejas01.github.io/challenge2-ONE-Juego-del-Ahorcado/" },
        { img: "/PF.png", title: "PrimeFit", desc1: "Página de gestión para gimnasio", desc2: "Creador: Nahuel Garrido", link: "https://remarkable-fox-3bb886.netlify.app/" },
    ];

    return (
        <div className='w-auto m-4 p-5 min-h-[700px] text-left px-4 md:px- flex flex-col border border-white rounded-md backdrop-blur-3xl'>
            <h2 className='text-2xl text-center mt-5 text-white mb-6 italic rounded-lg drop-shadow-[0_0_2px_rgba(0,0,0,0.5)]'>Últimos Proyectos de la comunidad</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {proyectosData.map((proyecto, index) => (
                    <a
                        key={index}
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='border h-72 border-white flex flex-col rounded-3xl p-0 backdrop-blur-3xl hover:opacity-80 transition-opacity'
                    >
                        <img className='w-full h-48 rounded-t-3xl object-cover' src={proyecto.img} alt={proyecto.title} />
                        <div className='flex flex-col mt-2 text-white items-center text-center '>
                            <p className='font-bold'>{proyecto.title}</p>
                            <p className='italic'>{proyecto.desc1}</p>
                            <p className='italic'>{proyecto.desc2}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export { Proyectos };
