import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaVuejs, FaLaravel } from "react-icons/fa"
import { SiTypescript, SiTailwindcss } from "react-icons/si"

const skills = [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJs },
    { name: "React", icon: FaReact },
    { name: "Vue.js", icon: FaVuejs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Laravel", icon: FaLaravel },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Figma", icon: FaFigma }
]

const About = () => {
    return (
        <section id="about" className="min-h-1/2 mx-auto  w-full justify-between py-20 items-center">
            <div className="grid gap-16 md:grid-cols-2">

                {/* Left */}
                <div className="space-y-6">
                    <h2 className="text-xl">A bit about me</h2>

                    <div className="space-y-4 text-slate-400 leading-relaxed">
                        <p>
                            I have always been fascinated by the power of the internet and how it can connect people and ideas from all over the world.
                        </p>

                        <p>
                            I believe that successful web development is all about collaboration and communication. I work closely with clients to understand their needs and preferences.
                        </p>

                        <p>
                            I am passionate about learning new technologies and staying up-to-date with the latest trends in web development.
                        </p>
                    </div>
                </div>

                {/* Right */}
                <div className="space-y-6">
                    <h2 className="text-xl">Some of the tools I use</h2>

                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-8">
                        {skills.map((skill) => {
                            const Icon = skill.icon

                            return (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center gap-2 text-slate-400 hover:text-green-300 transition"
                                >
                                    <Icon className="text-4xl" />
                                    <span className="text-sm">{skill.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About