import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      <div className="">
        {PROJECTS.map((proj, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={proj.image}
                alt={proj.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{proj.title}</h6>
              <p className="mb-4 text-neutral-400">{proj.description}</p>
              <div className="flex flex-wrap">
                {proj.technologies.map((tech, tech_idx) => (
                  <span
                    key={tech_idx}
                    className="bg-neutral-900 text-purple-800 text-sm font-medium px-2 py-1 mr-2 mt-4 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
