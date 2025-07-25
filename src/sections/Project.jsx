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
import bright from "../img/projects/brightburn/Screenshot from 2025-07-25 17-19-48.png"

const projectsData = [
  {
    id: 1,
    title: "Blog Platform",
    description: "A blogging platform with admin dashboard and SEO optimization.",
    image: light,
    category: "ReactJs",
    tags: ["ReactJs", "TailwindCss"],
    link : "https://lightrun.vercel.app"
  },
  {
    id: 2,
    title: "Food Recipe API",
    description: "An Food recipe api landing page API.",
    image: food,
    category: "Bootstrap",
    tags: ["Html", "Css" , "Bootstrap"],
    link : "https://food-recipe-api-landingpage.vercel.app/"
  },
  {
    id: 3,
    title: "Dental Hospital landing page",
    description: "A Dental Hospital minimal , clean landing page.",
    image: hospital,
    category: "Bootstrap",
    tags: ["Html", "Css" , "Bootstrap"],
    link : "https://dental-clinic-landing-page-ten.vercel.app/"
  },
  {
    id: 4,
    title: "SAAS",
    description: "A Website Business Service.",
    image: bright,
    category: "ReactJs",
    tags: ["Reactjs", "Tailwindcss", "Swiper Js"],
  },
  {
    id: 5,
    title: "Woofipidia",
    description: "A Dog API - Know more about your breed.",
    image: woof,
    category: "ReactJs",
    tags: ["Reactjs", "Tailwindcss", "Dog API"],
    link : "https:// woofipedia.vercel.app"
  },
  {
    id: 6,
    title: "A Student Video Conference",
    description: "A Student Video Conference Landing page.",
    image: vid,
    category: "Bootstrap",
    tags: ["Html", "Css", "Bootstrap"],
    link : "https://video-chat-landing-page.vercel.app/"
  },
  {
    id: 7,
    title: "Pop Quiz",
    description: "A test of general knowlegde.",
    image: test,
    category: "ReactJs",
    tags: ["ReactJs", "TailwindCss"],
    link : "https://knowledgeidk.vercel.app/ "
  },
  {
    id: 8,
    title: "Skin Glow",
    description: "A Perfect Skin Care Routine for women.",
    image: skin,
    category: "GSAP",
    tags: ["Html", "Css", "GSAP"],
    link : "https://product-landingpage-gsap.vercel.app/"
  },
  {
    id: 9,
    title: "",
    description: "A blogging platform with admin dashboard and SEO optimization.",
    image: women,
    category: "TailwindCss",
    tags: ["Html", "Css", "TailwindCss"],
  },
  {
    id: 10,
    title: "Blog Platform",
    description: "A blogging platform with admin dashboard and SEO optimization.",
    image: van,
    category: "Wixx",
    tags: ["Wixx"],
  },
  {
    id: 11,
    title: "Dance Blog",
    description: "A Creative Blogger site.",
    image: dance,
    category:"ReactJs",
    tags: ["ReactJs", "Tailwind"],
    link : "https://maliki-dance-blog-2024.vercel.app/"
  },


];

// Filter options
const filters = [
  { id: "all", label: "All" },
  { id: "Bootstrap", label: "Bootstrap" },
  { id: "TailwindCss", label: "TailwindCss" },
  { id: "JavaScript", label: "JavaScript" },
  { id: "ReactJs", label: "ReactJs" },
  { id: "Nextjs", label: "Nextjs" },
  { id: "Wixx", label: "Wixx" },
  { id: "GSAP", label: "GSAP" },
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
        <h2 className="text-4xl font-bold mt-10 mb-4">Pet Projects</h2>
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
                  ? "bg-white text-blue-600 border-blue-500 shadow-sm"
                  : "bg-gray-50 text-black border-gray-200 hover:border-blue-300"
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
                <h3 className="text-lg font-bold  group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm ">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1  bg-blue-500  rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to={`${project.link}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
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
                  ? "bg-blue-600 shadow"
                  : " hover:bg-purple-50 border border-gray-200"
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
