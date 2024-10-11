import { useState } from "react";
import { membersData } from "../utils/members";
import { MemberCard } from "../Componentes/member-card";

const Members = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = membersData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(membersData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container flex w-full p-2 mx-auto text-center text-white md:p-4">
      <div className="flex flex-col w-full border border-white rounded-md backdrop-blur-3xl">
        <div className="w-auto mt-9 text-4xl rounded-lg drop-shadow-[0_0_24px_rgba(0,0,0,0.5)] h-10 italic text-center content-center text-white">
          <p> Dream Team ☁</p>
        </div>

        <div className="grid grid-cols-1 gap-4 p-6 mt-11 sm:grid-cols-2 lg:grid-cols-2">
          {currentItems.map((member, index) => (
            <MemberCard key={`${index}-${member.name}`} member={member} />
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

export default Members;
