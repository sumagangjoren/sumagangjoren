import { FaChevronDown } from "react-icons/fa"
import SocialButtons from "./socialButtons"

const Home = () => {
    
    return (
        <section id="home" className="flex text-center justify-between py-20 items-center">

            <div>
                <h1 className="text-3xl font-bold">
                    Joren Sumagang
                </h1>

                <div className="py-10">
                    👋 Hello and welcome to my web developer portfolio.
                    I am a passionate web developer with a strong background in creating dynamic and responsive websites.
                    With expertise in HTML, CSS, JavaScript, and various frameworks,
                    I specialize in building user-friendly interfaces and seamless user experiences.
                    I am dedicated to delivering high-quality code and innovative solutions to meet the unique needs of each project.
                </div>

                <SocialButtons />

                <div className="flex justify-center mt-10">
                    <a
                        href="#projects"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:border-cyan-300 hover:bg-cyan-400/10 animate-bounce"
                    >
                        <FaChevronDown />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Home