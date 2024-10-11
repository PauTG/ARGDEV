import { useState } from "react";

const integrantesData = [
  { name: "Nicolas Suarez", role: "Owner Back-end", img: "/NicoL.png", linkedin: "https://www.linkedin.com/in/iamnicolas/" },
  { name: "Paula Gonzalez", role: "Administrador Front-end", img: "/PaulaL.png", linkedin: "https://www.linkedin.com/in/paulatg/" },
  { name: "Esteban Sayago", role: "Colaborador Front-end", img: "/EstebanL.png", linkedin: "https://www.linkedin.com/in/esteban-sayago/" },
  { name: "Matias Colazo", role: "Colaborador Front-end", img: "/MatiasL.png", linkedin: "https://www.linkedin.com/in/matias-colazo/" },
  { name: "Brahian Pereyra", role: "Colaborador Back-end", img: "/BrahianL.png", linkedin: "https://www.linkedin.com/in/brahianpdev/" },
  { name: "Javier Rodriguez", role: "Colaborador Front-end", img: "/JavierL.png", linkedin: "https://www.linkedin.com/in/rodriguezjavierc/"},
  { name: "Alan Farias", role: "Colaborador Back-end", img: "/AlanL.png", linkedin: "https://www.linkedin.com/in/alanfarias97/" },
  { name: "Nahuel Garrido", role: "Colaborador Back-end", img: "/NahuelL.png", linkedin: "https://www.linkedin.com/in/nahuel-garrido/" },
  { name: "Manuel Burgos", role: "Colaborador Back-end", img: "/ManuelL.png", linkedin: "https://www.linkedin.com/in/burgosmanuel-dev/" },
  { name: "Alan Cejas", role: "Colaborador Back-end", img: "/AlanCL.png", linkedin: "https://www.linkedin.com/in/alandcejas01/" },
  { name: "Franco Caviglia", role: "Colaborador Back-end", img: "/FrancoL.png", linkedin: "https://www.linkedin.com/in/francocaviglia/" },
  { name: "Antonella Vincenti", role: "Colaborador QA", img: "/AntonellaL.png", linkedin: "https://www.linkedin.com/in/antonella-sasha-vincenti/" },
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
    <div className="flex text-center w-full text-white md:p-4 p-2">
      <div className="flex flex-col h-[700px] border w-full border-white rounded-md backdrop-blur-3xl">
        <div className="w-auto mt-9 text-4xl rounded-lg drop-shadow-[0_0_2px_rgba(0,0,0,0.5)] h-10 italic text-center content-center text-white">
          <p> Dream Team ☁</p>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-11 p-6 sm:grid-cols-2 lg:grid-cols-2">
          {currentItems.map((integrante, index) => (
            <a
              key={index}
              href={integrante.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex w-full h-36 p-2 text-center border border-white rounded-md backdrop-blur-lg hover:shadow-lg"
            >
              <img
                className="mr-4 rounded-full h-32"
                src={integrante.img}
                alt={integrante.name}
              />
              <div className="flex flex-col justify-center font-medium text-left">
                <p>{integrante.name}</p>
                <p className="italic">{integrante.role}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center my-4 mt-7">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-1 px-2 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-white text-blue-400"
                  : "bg-blue-900 text-white"
              } hover:bg-blue-950`}
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
