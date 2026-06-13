const skills = [
  { title: 'React', description: 'Component architecture, hooks, and state management.' },
  { title: 'Tailwind CSS', description: 'Modern responsive styling with utility-first design.' },
  { title: 'AI Automation', description: 'Clean logic, async flows, and browser APIs.' },
  { title: 'UI/UX Design', description: 'Minimal interfaces and polished interactions.' },
  { title: 'Chatbot Development', description: 'REST and GraphQL connectivity for data-driven apps.' },
  { title: 'Collaboration', description: 'Cross-functional teamwork with strong communication.' },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="section-subtitle">Skills</p>
          <h2 className="section-heading mt-4 font-black text-primary">Capabilities I bring to every project</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.title} className="glass rounded-[2rem] p-8 border-white/20 shadow-[0_30px_80px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:border-primary/40 transition-all">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-3xl bg-[#071a3c] text-white text-xl font-semibold shadow-sm">
                {skill.title.slice(0, 1)}
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-primary">{skill.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
