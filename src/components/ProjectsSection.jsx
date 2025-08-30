import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 0,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project0.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://64acfe9e1360c149c010d1c6--rad-pastelito-4cbb81.netlify.app/",
    githubUrl: "https://github.com/2200031725cser/mern_stack_online_book_store",
  },
  {
    id: 1,
    title: "Quiz",
    description: "A quiz with web development.",
    image: "/projects/Project1.png",
    tags: ["React", "Node.js"],
    demoUrl: "https://quizz-lilac-theta.vercel.app/",
    githubUrl: "https://github.com/2200031725cser/Quizz",
  },
  {
    id: 2,
    title: "Weather-Forecast",
    description:
      "A simple weather forecast application where you can search for any location and get real-time temperature and forecast details. The background images also change dynamically according to the time of day and temperature.",
    image: "/projects/Project2.png",
    tags: ["Python", "HTML", "Django"],
    githubUrl: "https://github.com/2200031725cser/weather-forecast",
  },
  {
    id: 3,
    title: "Bus-Reservation-System",
    description:
      "A simple bus reservation system where users can search for available buses, view schedules, and book tickets.",
    image: "/projects/Project3.png",
    tags: ["Python", "HTML", "Django"],
    githubUrl: "https://github.com/2200031725cser/Bus-Reservation-System",
  },
  {
    id: 4,
    title: "Hospital-Management-System",
    description:
      "A simple hospital management system where users can search for available doctors, view schedules, and book appointments.",
    image: "/projects/Project4.png",
    tags: ["Python", "HTML","CSS", "Django"],
    githubUrl: "https://github.com/2200031725cser/Hospital-Management-System",
  },
  {
    id: 5,
    title: "Online-Job-Portal",
    description:
      "A simple online job portal where users can search for available jobs, view details, and apply for positions.",
    image: "/projects/Project5.png",
    tags: ["React", "HTML","CSS", "MySQL"],
    githubUrl: "https://github.com/2200031725cser/Online-Job-Portal",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/2200031725cser"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
