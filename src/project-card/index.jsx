export const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      // className="flex flex-col p-0 transition-opacity border border-white h-72 rounded-3xl backdrop-blur-3xl hover:opacity-80"
      className="flex-col p-0 overflow-hidden card"
    >
      <img
        className="object-cover h-48"
        src={project.img}
        alt={project.title}
      />
      <div className="mt-2 text-center card-container">
        <p className="card-title">{project.title}</p>
        <p className="card-text">{project.desc1}</p>
        <p className="card-text">{project.desc2}</p>
      </div>
    </a>
  );
};
