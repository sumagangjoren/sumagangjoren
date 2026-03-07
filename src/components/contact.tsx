import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { FaCircleCheck, FaCircleXmark } from 'react-icons/fa6'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [inputErrorMessage, setInputErrorMessage] = useState('')
    const [status, setStatus] = useState<"success" | "error" | null>(null)

    const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!validateForm()) return
        setLoading(true)        
        var formData = {
            name,
            email,
            message
        }

        emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formData, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
            limitRate: { id: 'contactForm', throttle: 10000}
        }).then(
            (response) => {
                setStatus("success")
                setName('')
                setEmail('')
                setMessage('')
                console.log('Email Sent!', response.status, response.text)
            },
            (error) => {
                setStatus("error")
                console.log('Submission FAILED...', error)
            },
        ).finally(() => {
            setTimeout(() => {
                setStatus(null)
            }, 2000)
            setLoading(false)
        })
    }

    const validateForm = () => {
        if (!name.trim() || !email.trim() || !message.trim()) {
            setInputErrorMessage("All fields are required.")
            return false
        }

        if (name.length < 2) {
            setInputErrorMessage("Name must be at least 2 characters.")
            return false
        }

        if (message.length < 10) {
            setInputErrorMessage("Message must be at least 10 characters.")
            return false
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            setInputErrorMessage("Please enter a valid email address.")
            return false
        }

        setInputErrorMessage('')
        return true
    }

    return (
        <section id="contact" className="py-20 ">

            <div className="pb-16 text-center">
                <h2 className="text-2xl font-semibold">Get in Touch</h2>
                <p className="mt-2">
                    Reach out and let's chat about how I can help with your software development needs.
                </p>
            </div>

            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6  sm:col-span-12">
                    <h3 className="text-lg font-medium mb-6">Contact Information</h3>
                    <div className="space-y-6 text-slate-300">
                        <div>
                            <p className="text-sm text-slate-400">Email</p>
                            <p className="text-white">sumagangjoren@gmail.com</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Phone</p>
                            <p className="text-white">+63 951 448 0759</p>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Location</p>
                            <p className="text-white">Cebu, Philippines</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6  sm:col-span-12">
                    <form className="space-y-6 pt-10 sm:p-0" onSubmit={handleContactSubmit} id='contactForm'>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:bg-white/10"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:bg-white/10"
                            />
                        </div>

                        <textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            required
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:bg-white/10"
                        />

                        {inputErrorMessage && (
                            <div className="">
                                <div
                                    className="rounded-lg border px-6 py-4 shadow-lg backdrop-blur-md border-red-500 bg-red-500/10 text-red-400"
                                >
                                    {inputErrorMessage}
                                </div>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-lg border border-white/20 px-6 py-3 text-sm transition hover:border-green-500 hover:bg-green-400/10 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
            {status && (
                <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
                    <div
                        className={`rounded-lg border px-6 py-4 shadow-lg backdrop-blur-md
                        ${status === "success"
                                ? "border-green-500 bg-green-500/10 text-green-400"
                                : "border-red-500 bg-red-500/10 text-red-400"
                            }`}
                    >
                        {status === "success"
                            ? <><FaCircleCheck className="inline mr-2" /> Message sent successfully!</>
                            : <><FaCircleXmark className="inline mr-2" /> Failed to send message. Please try again.</>}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Contact
