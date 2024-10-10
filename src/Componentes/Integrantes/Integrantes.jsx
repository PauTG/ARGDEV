import { useState } from "react";

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
    <div className="flex justify-center w-full h-auto text-center text-white md:p-8 p-2"> {/* Cambié mt-0 a p-0 */}
      <div className="flex flex-col w-full h-full px-0 border border-white rounded-md md:container backdrop-blur-3xl">
        <div className="w-auto m-3 text-4xl italic text-center text-white">
          <p> Dream Team ☁</p>
        </div>

        <div className="grid grid-cols-1 gap-4 m-4 sm:grid-cols-2 lg:grid-cols-2">
          {currentItems.map((integrante, index) => (
            <div
              key={index}
              className="flex w-full h-32 p-2 text-center border border-white rounded-md backdrop-blur-lg"
            >
              <img
                className="mr-4 rounded-full h-28"
                src={integrante.img}
                alt={integrante.name}
              />
              <div className="flex flex-col justify-center font-medium text-left">
                <p>{integrante.name}</p>
                <p className="italic">{integrante.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center my-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`mx-1 px-2 py-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-white text-black"
                  : "bg-gray-700 text-white"
              } hover:bg-gray-600`}
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
