export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 scroll-reveal reveal-from-bottom reveal-delay-1">
      <div className="max-w-5xl mx-auto glass rounded-[2rem] border-white/20 p-12 shadow-[0_40px_120px_rgba(15,23,42,0.08)]">
        <div className="text-center space-y-6">
          <p className="section-subtitle scroll-reveal reveal-from-right reveal-delay-2">Contact</p>
          <h2 className="section-heading font-black text-primary scroll-reveal reveal-from-right reveal-delay-3">Let’s build something beautiful together.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed scroll-reveal reveal-from-right reveal-delay-4">
            I’m available for freelance work, collaborations, or full-time opportunities. Send a message and I’ll respond as soon as possible.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-100/80 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Email</p>
            <p className="mt-4 font-semibold text-primary">Mansoormoizjawra@gmail.com</p>
          </div>
          <div className="rounded-3xl bg-slate-100/80 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Location</p>
            <p className="mt-4 font-semibold text-primary">Karachi/Pakistan</p>
          </div>
          <div className="rounded-3xl bg-slate-100/80 p-6 text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Availability</p>
            <p className="mt-4 font-semibold text-primary">Open for new projects</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="mt-12 grid gap-4 sm:grid-cols-3 text-center">
            <a href="https://wa.me/03357555253" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-3xl bg-green-500/10 border border-green-500/20 px-6 py-4 text-green-700 font-semibold hover:bg-green-500/15">
              <span className="text-xl">📱</span>
              WhatsApp
            </a>
            <a href="https://www.instagram.com/mansoor__moiz/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-3xl bg-pink-500/10 border border-pink-500/20 px-6 py-4 text-pink-700 font-semibold hover:bg-pink-500/15">
              <span className="text-xl">📸</span>
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/mansoor-moiz/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-3xl bg-blue-500/10 border border-blue-500/20 px-6 py-4 text-blue-700 font-semibold hover:bg-blue-500/15">
              <span className="text-xl">🔗</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
