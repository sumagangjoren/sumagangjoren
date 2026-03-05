import SocialButtons from "./socialButtons"
const Contact = () => {

    return (
        <section id="contact" className="py-20 px-5 sm:px-8 max-w-6xl mx-auto">

            {/* Header */}
            <div className="pb-16 text-center">
                <h2 className="text-2xl font-semibold">Get in Touch</h2>
                <p className="mt-2">
                    Reach out and let's chat about how I can help with your software development needs.
                </p>
            </div>

            <div className="grid grid-cols-12 gap-12">

                {/* LEFT SIDE */}
                <div className="col-span-12 md:col-span-5">
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

                    {/* <hr className="my-8 border-white/10" /> */}

                    {/* <p className="text-sm mb-4">Connect on Social Media</p> */}

                    {/* <SocialButtons /> */}
                </div>

                {/* RIGHT SIDE */}
                <div className="col-span-12 md:col-span-7">
                    <form className="space-y-6">

                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-green-300 focus:bg-white/10"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-green-300 focus:bg-white/10"
                            />
                        </div>

                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none transition focus:border-green-300 focus:bg-white/10"
                        />

                        <button
                            type="submit"
                            className="rounded-lg border border-white/20 px-6 py-3 text-sm transition hover:border-green-300 hover:bg-green-400/10"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

            </div>
        </section>
    )
}

export default Contact
