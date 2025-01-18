import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="p-8" id="projects">
      <h2 className="my-10 text-center text-3xl lg:text-8xl">My Work</h2>
      <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
        {PROJECTS.map((project) => (
          <div key={project.id} className="block">
            <div className="relative mb-4 overflow-hidden rounded-lg bg-white shadow-lg ">
              <img src={project.imgSrc} alt={project.title} className="h-auto w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 m-8 p-8 text-white backdrop-blur-md ">
                <h3 className="text-3xl">{project.title}</h3>
                <p className="max-w-xs text-lg">{project.description}</p>
                
                {/* Demo and GitHub Links */}
                <div className="mt-4 flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm font-semibold text-black bg-lime-300 rounded hover:bg-lime-500 cursor-pointer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded hover:bg-gray-900 cursor-pointer"
                  >
                    GitHub
                  </a>
                </div>
                 
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;