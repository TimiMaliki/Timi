import {FaArrowAltCircleRight } from "react-icons/fa";
import Buttons from "../components/buttons";
import Header from "../components/Headers";
import { Link } from "react-router-dom";

const LatestWorks = () => {
  const projects = [
    {
      title: "Jobbazar - AI-Powered Job Platform",
      description:
        "Revolutionized job searching with machine learning algorithms that match candidates to ideal positions. Built with React, Node.js, and MongoDB, featuring real-time notifications and advanced filtering.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React", "Node.js", "MongoDB", "AI Matching"],
      year: "2023",
      link: "/projects/jobbazar",
    },
    {
      title: "Slepp - Social Media for Professionals",
      description:
        "Created a LinkedIn alternative focused on authentic professional connections. Implemented WebSockets for real-time messaging, custom analytics dashboards, and secure authentication flow.",
      image:
        "https://cdn.easyfrontend.com/pictures/portfolio/portfolio16_2.png",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "Web Sockets"],
      year: "2022",
      link: "/projects/slepp",
    },
    {
      title: "Costa - Restaurant Management System",
      description:
        "End-to-end solution for restaurant operations including inventory, POS, and customer loyalty programs. Reduced order processing time by 40% with optimized workflows.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["React Native", "GraphQL", "Django", "Payment Processing"],
      year: "2023",
      link: "/projects/costa",
    },
  ];

  return (
    <section className="py-20 ovo-regular">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Header */}
        <Header intro={"Portfolio showcase"} title={"My Work"}/>
        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 text-black">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative  p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100  "
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-base font-light">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-">{project.title}</h3>
              <p className=" text-sm mb-4">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center align-middle py-8">
            <Link>
            <Buttons color={"border shadow-[1.95px_1.95px_2.6px_rgba(0,0,0,0.15)]"} textColor={""} icons={<FaArrowAltCircleRight  className="w-5 h-5 mt-1 "/>} text={"view more"} />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;
