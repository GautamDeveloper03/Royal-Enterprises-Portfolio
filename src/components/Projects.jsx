import { useMemo, useState } from "react";
// import { X, Maximize2 } from "lucide-react";
import { X, Maximize2, ChevronDown } from "lucide-react";
import {
  projects,
  projectCategories,
} from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory]);

  // Show 6 projects initially
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 8);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Our Work
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Projects & Gallery
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Explore examples of ceiling and interior design inspiration.
          </p>
        </div>

        {/* Filters */}
        <div className="no-scrollbar mt-9 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`min-h-10 shrink-0 rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                activeCategory === category
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {visibleProjects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-xl bg-slate-100 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.category}`}
                loading="lazy"
                className="image-zoom aspect-[34/26] w-full object-cover object-center"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

              {/* Project Details */}
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  {project.category}
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  {project.title}
                </p>
              </div>

              {/* Maximize Icon */}
              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950/70 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                <Maximize2 size={16} />
              </div>
            </button>
          ))}
        </div>

        {/* See More / Show Less */}
        {filteredProjects.length > 6 && (
          <div className="mt-10 flex justify-center">
          <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="group flex items-center gap-2 rounded-full border border-blue-600 px-6 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
           >
            {showAll ? "Show Less" : "See More"}

          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
            showAll ? "rotate-180" : "group-hover:translate-y-1"
          }`}
          />
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close image"
              className="absolute right-2 top-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 text-white transition hover:bg-blue-600 sm:-right-3 sm:-top-3"
            >
              <X size={21} />
            </button>

            {/* Large Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="max-h-[80vh] w-full rounded-xl object-contain"
            />

            {/* Image Information */}
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                {selectedProject.category}
              </p>

              <h3 className="mt-1 text-xl font-bold text-white">
                {selectedProject.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}