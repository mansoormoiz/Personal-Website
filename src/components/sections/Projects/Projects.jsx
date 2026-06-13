import { useState } from 'react'

const projects = [
  {
    id: '1',
    title: 'Full- Stack Web Development Projects',
    subtitle: 'Architected and deployed full-stack applications across e-commerce, business, and portfolio platforms.',
    tag: 'React / Tailwind',
    date: '2024-Present',
    details: 'Built responsive frontend interfaces focused on usability and performance across devices Engineered backend systems to handle core business logic, APIs, and data flow Managed deployment pipelines ensuring stable, production-ready application releases.',
  },
  {
    id: '2',
    title: ' AI-Based Market Sentiment Prediction (Team Project)',
    subtitle: 'Collaborated on a team project to train an AI model for analyzing news sentiment and predicting stock market behavior using live and simulated event data.',
    tag: 'python / scikit-learn',
    date: '2025',
    details: 'Built and maintained data pipelines for cleaning, structuring, and processing raw datasets Assisted in implementing and testing baseline machine learning models for performance evaluation Supported experiment tracking and validation workflows to ensure model reliability and consistency.',
  },
  {
    id: '3',
    title: 'AI Automation Workflows',
    subtitle: 'Engineered early to mid-stage AI automation systems using modern tools and frameworks.',
    tag: 'N8N / python',
    date: '2025-Present',
    details: 'Designed and implemented automated workflows to streamline repetitive tasks and improve operational efficiency.',
  },
  {
    id: '4',
    title: 'Prompt Engineering Testing & Research ',
    subtitle: 'Executed structured testing of prompt design patterns to evaluate their impact on LLM outputs.',
    tag: 'Python / AI API',
    date: '2025',
    details: 'Analyzed response accuracy, reasoning quality, and behavioral variations across different instruction styles Documented performance differences to identify effective prompting strategies Refined prompt structures based on observed model behavior and output consistency.',
  },
  {
    id: '5',
    title: 'AI Behavior Analysis (Bias & Hallucinations)',
    subtitle: 'Investigated AI model limitations focusing on bias and hallucination tendencies using structured evaluation methods.',
    tag: 'python / AI API',
    date: '2025',
    details: 'Simplified the product journey with clean cards, clear cart actions, and a calm checkout path that keeps shoppers focused.',
  },
  {
    id: '6',
    title: 'Graphic & Web Design Portfolio',
    subtitle: 'Produced and developed visual assets and web interfaces for personal and freelance projects.',
    tag: 'Illustrator / Figma',
    date: '2022-2025',
    details: 'Used Figma for UI/UX design and layout structuring. Implemented designs using HTML, CSS, and JavaScript for functional web interfaces Maintained consistent branding and design systems across all projects.',
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const activeProject = projects[activeIndex]

  const handlePrevious = () => {
    setActiveIndex((current) => (current === 0 ? projects.length - 1 : current - 1))
  }

  const handleNext = () => {
    setActiveIndex((current) => (current === projects.length - 1 ? 0 : current + 1))
  }

  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="section-subtitle">Projects</p>
          <h2 className="section-heading mt-4 font-black text-primary">One project at a time, ready to explore</h2>
        </div>

        <div className="relative flex flex-col items-center gap-6">
          <div className="flex flex-col items-center justify-center gap-6 w-full md:flex-row">
            <button
              onClick={handlePrevious}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-lg transition hover:bg-slate-100"
              aria-label="Previous project"
            >
              ‹
            </button>

            <div className="w-full max-w-3xl">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-10 text-slate-950 shadow-[0_35px_100px_rgba(15,23,42,0.08)]">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{activeProject.date}</p>
                      <h3 className="mt-4 text-3xl font-semibold text-slate-950">{activeProject.title}</h3>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                      {activeProject.tag}
                    </span>
                  </div>

                  <p className="text-slate-600 leading-relaxed">{activeProject.subtitle}</p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Focus</p>
                      <p className="mt-3 text-lg font-semibold text-slate-950">Systems</p>
                    </div>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Outcome</p>
                      <p className="mt-3 text-lg font-semibold text-slate-950">Impact</p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-500">Click arrows or the dots to browse projects.</p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                      >
                        Learn more
                      </button>
                      <button
                        onClick={handleNext}
                        className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                      >
                        Next project
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 w-3 rounded-full transition ${
                      index === activeIndex ? 'bg-slate-950' : 'bg-slate-300'
                    }`}
                    aria-label={`Select project ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-lg transition hover:bg-slate-100"
              aria-label="Next project"
            >
              ›
            </button>
          </div>

          {isModalOpen && (
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
              <div className="modal-content glass p-8" onClick={(event) => event.stopPropagation()}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{activeProject.date}</p>
                    <h3 className="mt-3 text-3xl font-bold text-primary">{activeProject.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{activeProject.tag}</p>
                  </div>
                  <button onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-primary text-2xl font-bold">
                    ×
                  </button>
                </div>
                <p className="mt-8 text-slate-600 leading-relaxed">{activeProject.details}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {activeProject.tag.split(' / ').map((skill) => (
                    <span key={skill} className="rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
