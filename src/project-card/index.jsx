export const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col p-0 transition-opacity border border-white h-72 rounded-3xl backdrop-blur-3xl hover:opacity-80"
    >
      <img
        className="object-cover h-48 rounded-t-3xl"
        src={project.img}
        alt={project.title}
      />
      <div className="flex flex-col items-center mt-2 text-center text-white ">
        <p className="font-bold">{project.title}</p>
        <p className="italic">{project.desc1}</p>
        <p className="italic">{project.desc2}</p>
      </div>
    </a>
  );
};
