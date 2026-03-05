import SocialButtons from "./socialButtons"
const Footer = () => {
    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto w-full  py-8  gap-4 text-sm text-slate-400 justify-between items-center flex-col md:flex-row flex">

                {/* Left */}
                <p className="text-center ">
                    © {new Date().getFullYear()} <span className="text-white">Joren Sumagang</span>.
                    All rights reserved.
                </p>

                {/* <p className="text-center">
          Built with <span className="text-green-300"><FaHeart /></span> + <span className="text-green-300"><FaCode /></span>
        </p> */}

                {/* Right */}
                    <SocialButtons />
            </div>
        </footer>
    )
}

export default Footer