import { useState } from "react";
import { Link } from "react-router-dom";
import dance from "../img/projects/dance-blog/Screenshot from 2025-04-23 02-37-35.png"
import food from "../img/projects/food-recipes/Screenshot from 2025-04-23 02-29-56.png"
import hospital from "../img/projects/hospital/Screenshot from 2024-12-27 21-52-57.png"
import  van from "../img/display-works/van.png"
import light from "../img/projects/light/2.png"
import vid from "../img/projects/vid-call/Screenshot from 2025-04-23 02-22-29.png"
import test from "../img/projects/knowledge/5.png"
import skin from "../img/projects/skin-care/Screenshot from 2025-04-23 02-33-04.png"
import women from "../img/projects/women-fashion/Screenshot from 2025-04-23 03-13-29.png"
import woof from "../img/projects/woof/1.png"
const projectsData = [
  {
    id: 1,
    title: "A Dance Blog",
    description: "A modern admin dashboard with analytics and inventory control.",
    image: dance,
    category: "Dashboard",
    tags: ["React", "Tailwind", "Chart.js"],
  },
  {
    id: 2,
    title: "Creative Portfolio Website",
    description: "Personal branding website with smooth animations and filtering.",
    image: food,
    category: "Website",
    tags: ["GSAP", "React", "Tailwind"],
  },
  {
    id: 3,
    title: "Car Service Booking App",
    description: "Responsive car service app with booking and tracking features.",
    image: hospital,
    category: "Mobile App",
    tags: ["React Native", "Firebase"],
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A blogging platform with admin dashboard and SEO optimization.",
    image: light,
    category: "Web App",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A blogging platform with admin dashboard and SEO optimization.",
    image: van,
    category: "Web App",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "A blogging platform with admin dashboard and SEO optimization.",
    image: vid,
    category: "Web App",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 7,
    title: "Blog Platform",
    description: "A blogging platform with admin dashboard and SEO optimization.",
    image: test,
    category: "Web App",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 8,
    title: "Blog Platform",
    description: "A blogging platform with admin dashboard and SEO optimization.",
    image: skin,
    category: "Web App",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 9,
    title: "Blog Platform",
    description: "A blogging platform with admin dashboard and SEO optimization.",
    image: women,
    category: "Web App",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 10,
    title: "Blog Platform",
    description: "A blogging platform with admin dashboard and SEO optimization.",
    image: woof,
    category: "Reactjs",
    tags: ["Reactjs", "Tailwindcss", "Dog API"],
  },

];

// Filter options
const filters = [
  { id: "all", label: "All" },
  { id: "Html and Css", label: "Html and Css" },
  { id: "Bootstrap", label: "Bootstrap" },
  { id: "TailwindCss", label: "TailwindCss" },
  { id: "JavaScript", label: "JavaScript" },
  { id: "Reactjs", label: "Reactjs" },
  { id: "Nextjs", label: "Nextjs" },
  { id: "Wixx", label: "Wixx" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Filtering logic
  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIdx, startIdx + itemsPerPage);

  return (
    <section id="projects" className="py-20  px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mt-10 mb-4">Projects</h2>
        <p className="text-lg mb-12">My Little Achievements</p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-white text-purple-600 border-purple-500 shadow-sm"
                  : "bg-gray-50 text-gray-600 border-gray-200 hover:border-purple-300"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group relative  backdrop-blur-xl border border-gray-100 dark:border-slate-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-3">
                <span className="text-xs uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold  group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm ">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-purple-50 text-purple-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/works/${project.id}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-purple-600 hover:underline"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <nav className="flex items-center justify-center space-x-1 mt-14">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-colors ${
                currentPage === page
                  ? "bg-purple-600 text-white shadow"
                  : "bg-white hover:bg-purple-50 border border-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Projects;
