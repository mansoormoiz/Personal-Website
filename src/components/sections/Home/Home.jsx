export default function Home() {
  return (
    <section id="home" className="min-h-[calc(100vh-72px)] px-6 pt-4 pb-8">
      <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-[1.45fr_0.75fr] items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium text-primary shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
            Home
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black leading-tight text-primary">
              Hi, I’m <span className="text-accent">Mansoor,</span>  a student shaping calm digital spaces through intelligent design.
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
              I turn ideas into clean, polished web and AI experiences that feel friendly and easy to navigate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="inline-flex items-center justify-center px-7 py-4 bg-primary text-white rounded-2xl font-semibold shadow-xl hover:bg-accent hover:-translate-y-0.5">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-7 py-4 border-2 border-primary text-primary rounded-2xl font-semibold hover:bg-primary hover:text-white">
              Contact Me
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="glass rounded-3xl p-5 border-white/20 shadow-xl text-center">
              <p className="text-2xl md:text-3xl font-black text-primary">2+</p>
              <p className="mt-2 text-sm text-slate-600">Years building websites</p>
            </div>
            <div className="glass rounded-3xl p-5 border-white/20 shadow-xl text-center">
              <p className="text-2xl md:text-3xl font-black text-primary">10+</p>
              <p className="mt-2 text-sm text-slate-600">Projects shipped</p>
            </div>
            <div className="glass rounded-3xl p-5 border-white/20 shadow-xl text-center">
              <p className="text-2xl md:text-3xl font-black text-primary">100%</p>
              <p className="mt-2 text-sm text-slate-600">Attention to detail</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute lg:-right-10 right-0 top-8 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="glass rounded-[2rem] p-8 border-white/20 shadow-[0_30px_90px_rgba(15,23,42,0.10)] floating-card">
            <div className="flex flex-col items-center gap-5">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-950 text-4xl text-white shadow-lg">
                <span className="wave-icon">👋</span>
              </div>
              <div className="space-y-2 text-center">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Hello, I’m</p>
                <h2 className="text-2xl font-bold text-primary">Mansoor</h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  AI developer focused on creating intuitive and seamless experiences with simple interactions and refined details.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 w-full">
                <div className="glass rounded-2xl p-3 text-center border-white/20">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Strength</p>
                  <p className="mt-2 font-semibold text-primary">Ctrl+Alt+Create</p>
                </div>
                <div className="glass rounded-2xl p-3 text-center border-white/20">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Focus</p>
                  <p className="mt-2 font-semibold text-primary">Hyperfixated</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full bg-cyan-200/20 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
