
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
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wide text-purple-600 font-semibold">
            Portfolio Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Latest Projects
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 text-black">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative  p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-transparent hover:bg-gradient-to-br from-purple-50 to-pink-50 dark:hover:from-purple-800/20 dark:hover:to-pink-800/20"
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
                  <span
                    key={i}
                    className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full dark:bg-purple-900/40 dark:text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestWorks;
