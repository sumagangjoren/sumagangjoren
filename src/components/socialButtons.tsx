import { FaGithub, FaFacebook, FaInstagram, FaSpotify } from "react-icons/fa"

const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/your-username",
            icon: <FaGithub />
        },
        {
            name: "Facebook",
            href: "https://facebook.com/your-profile",
            icon: <FaFacebook />
        },
        {
            name: "Instagram",
            href: "https://instagram.com/your-profile",
            icon: <FaInstagram />
        },
        {
            name: "Spotify",
            href: "https://open.spotify.com/user/your-profile",
            icon: <FaSpotify />
        },
    ]

const SocialButtons = () => {
  return (
    <div className="flex items-center gap-3 justify-center">
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