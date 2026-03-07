import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaEnvelope  } from "react-icons/fa"
interface Props {
    className?: string
}

const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/sumagangjoren",
            icon: <FaGithub />
        },
        {
            name: "Facebook",
            href: "https://www.facebook.com/sumagangjoren",
            icon: <FaFacebook />
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/sumagangjoren",
            icon: <FaInstagram />
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/sumagangjoren/",
            icon: <FaLinkedin />
        },
         {
        name: "Email",
        href: "mailto:sumagangjoren@gmail.com",
        icon: <FaEnvelope />
    },
    ]

const SocialButtons = ({className} : Props) => {
  return (
    <div className={`flex items-center gap-3 justify-center ${className}`}>
        {socialLinks.map((social) => (
            <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 transition hover:bg-green-400"
            >
                <span className="text-xl transition group-hover:text-black">
                    {social.icon}
                </span>
            </a>
        ))}
    </div>
  )
}

export default SocialButtons