export default function About() {
  return (
    <section id="about" className="px-6 py-24 scroll-reveal reveal-from-bottom reveal-delay-1">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
            About me
          </div>
          <div className="space-y-6">
            <h2 className="section-heading font-black text-primary scroll-reveal reveal-from-right reveal-delay-2">A thoughtful developer who loves elegant interfaces.</h2>
            <p className="text-lg leading-relaxed text-slate-600 max-w-2xl scroll-reveal reveal-from-right reveal-delay-3">
              I combine interface design, performance-minded engineering, and business awareness to create web products and AI solutions that delight users and help teams move faster.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass rounded-3xl p-6 border-white/30 shadow-xl">
              <h3 className="text-xl font-semibold text-primary">Short bio</h3>
              <p className="mt-3 text-slate-600">I’m an AI developer who enjoys crafting web and AI projects with clean interfaces. I focus on Design, Returns, and Exceutions.</p>
            </div>
            <div className="glass rounded-3xl p-6 border-white/30 shadow-xl">
              <h3 className="text-xl font-semibold text-primary">What I build</h3>
              <p className="mt-3 text-slate-600">Personal portfolios, E commerce websites, chatbots and AI solutions catered for your business needs.</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {['Design', 'Development', 'Collaboration'].map((item) => (
              <div key={item} className="glass rounded-3xl p-5 border-white/20 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -top-10 left-0 w-36 h-36 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="glass relative overflow-hidden rounded-[2rem] border-white/30 shadow-[0_40px_120px_rgba(15,23,42,0.12)] p-8 floating-card scroll-reveal reveal-from-left reveal-delay-4">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-200/30"></div>
            <div className="absolute -bottom-10 left-10 h-28 w-28 rounded-full bg-primary/10"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <div className="rounded-[2rem] bg-slate-950/95 p-6 text-white shadow-inner">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Profile</p>
                    <h3 className="mt-3 text-2xl font-semibold">Creative developer</h3>
                  </div>
                  <div className="h-12 w-12 rounded-3xl bg-slate-800/80 flex items-center justify-center text-xl">👨‍💻</div>
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="rounded-3xl bg-white/8 p-4">
                    <p className="text-sm text-slate-300">Designing modern dashboards, landing pages, and Intelligent workflows</p>
                  </div>
                  <div className="rounded-3xl bg-white/8 p-4">
                    <p className="text-sm text-slate-300">Bringing structure to interfaces with subtle animation and clean layout.</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: 'UI Patterns', value: 'Atomic Chaos' },
                  { title: 'Core Stack', value: 'Ideas.js + overthink.py' },
                ].map((stat) => (
                  <div key={stat.title} className="glass rounded-3xl p-5 border-white/20">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{stat.title}</p>
                    <p className="mt-4 text-xl font-semibold text-primary">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-accent/10 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
