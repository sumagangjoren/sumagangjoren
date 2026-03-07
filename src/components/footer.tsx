import SocialButtons from "./socialButtons"
const Footer = () => {
    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto w-full  py-8  gap-4 text-sm text-slate-400 justify-between items-center flex-col md:flex-row flex">
                <p className="text-center ">
                    © {new Date().getFullYear()} <span className="text-white">Joren Sumagang</span>.
                    All rights reserved.
                </p>
                <SocialButtons className="text-white" />
            </div>
        </footer>
    )
}

export default Footer