import { ProjectCard } from "../project-card";
import { projectsData } from "../utils/projects";

const Projects = () => {
  return (
    <div className="container flex w-full p-2 mx-auto text-left md:p-4">
      <div className="flex flex-col p-4 border border-white rounded-md backdrop-blur-3xl">
        <h2 className="text-2xl text-center mt-5 text-white mb-6 italic rounded-lg drop-shadow-[0_0_24px_rgba(0,0,0,0.5)] ">
          Últimos Proyectos de la comunidad
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {projectsData.map((project, index) => (
            <ProjectCard key={`${index}-${project.title}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
