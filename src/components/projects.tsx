import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

const projects = [
    {
        title: "Portfolio Website",
        description:
            "A personal developer portfolio showcasing projects, skills, and contact information.",
        image: "/projects/sampleproject.png",
        tech: ["React", "TypeScript", "Tailwind"],
        demo: "#",
        github: "#",
    },
    {
        title: "Task Manager App",
        description:
            "A full-stack task manager with authentication and CRUD functionality.",
        image: "/projects/sampleproject.png",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        demo: "#",
        github: "#",
    },
    {
        title: "E-commerce Dashboard",
        description:
            "Admin dashboard for managing products, users, and orders.",
        image: "/projects/sampleproject.png",
        tech: ["Next.js", "Prisma", "PostgreSQL"],
        demo: "#",
        github: "#",
    },
    {
        title: "Chat Application",
        description:
            "Real-time messaging app using websockets.",
        image: "/projects/sampleproject.png",
        tech: ["React", "Socket.io", "Node.js"],
        demo: "#",
        github: "#",
    },
]

const Projects = () => {
    return (
        <section id="projects" className="min-h-screen py-20">
            <div>
                <h2 className="text-xl mb-10">Some of my projects</h2>

            </div>
            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="border border-white/10 bg-white/5 rounded-xl overflow-hidden transition hover:border-green-500/40 hover:bg-white/10"
                    >

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover transition duration-500 hover:scale-105 opacity-90"
                            />
                        </div>

                        <div className="p-6">

                            {/* Title */}
                            <h3 className="text-lg font-medium mb-2">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-400 text-sm mb-4">
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-3 py-1 border border-white/10 rounded-full text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-white/20 transition hover:border-green-500 hover:text-green-500"
                                >
                                    <FaExternalLinkAlt size={14} />
                                    Demo
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-md border border-white/20 transition hover:border-green-500 hover:text-green-500"
                                >
                                    <FaGithub size={14} />
                                    Code
                                </a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects