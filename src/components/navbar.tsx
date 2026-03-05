import { useState, useEffect } from "react"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const [scrolled, setScrolled] = useState(false)

    const links = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
    ]

    useEffect(() => {

        const sections = document.querySelectorAll("section")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                threshold: 0.6
            }
        )
        sections.forEach((section) => observer.observe(section))

         const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            observer.disconnect()
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    return (
       <header
    className={`sticky top-0 z-50 border-b transition-all duration-300
    ${scrolled
        ? "border-white/10 bg-[#0b0f14]/80 backdrop-blur-md"
        : "border-transparent bg-transparent"}
    `}
>
            <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between">
                <a
                    href="#home"
                    className="text-2xl font-medium tracking-wide text-white transition hover:text-green-300"
                >
                    JOREN
                </a>

                <ul className="hidden items-center gap-8 text-md font-thin text-slate-200 md:flex">
                    {
                        links.map((link) => {
                            const sectionId = link.href.replace("#", "")
                            return (
                            <li key={link.href}>
                                <a
                                href={link.href}
                                className={`transition uppercase ${
                                    activeSection === sectionId
                                    ? "text-green-300"
                                    : "text-slate-200 hover:text-green-300"
                                }`}
                                >
                                {link.label}
                                </a>
                            </li>
                            )
                        })
                    }
                </ul>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    type="button"
                    aria-label="Open menu"
                    className="inline-flex items-center rounded-md border border-white/20 p-1 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300 md:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={
                                isMenuOpen
                                    ? "M6 18 18 6M6 6l12 12" // close
                                    : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" // menu
                            }
                        />
                    </svg>
                </button>
            </nav>
            {isMenuOpen && (
                <div className="absolute left-0 top-full w-full bg-[#0b0f14] border-b border-white/10 md:hidden">
                    <div className="grid grid-cols-1">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-6 py-4 text-slate-200 transition hover:text-green-300 text-end"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
