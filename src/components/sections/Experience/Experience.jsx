import { useEffect, useState } from 'react'

const experiences = [
  {
    id: '1',
    role: 'Founder',
    company: 'NeuralFlow',
    date: '2025 · Present',
    description: 'Offering digital systems across web development, AI automation, and brand designn Focus on turning ideas into scalable, functional, and visually strong products for modern businesses',
    details: 'I lead end-to-end project execution, from concept and design to deployment and automation workflows My work focuses on combining clean engineering with smart automation to improve efficiency and user experience.',
  },
  {
    id: '2',
    role: 'VP (College Event)',
    company: 'Alpha College',
    date: '2026',
    description: 'Led planning and execution of a large scale fundraising bazar with 6k+ attendees, managing stalls, tickets, sponsorship and on day operations resulting in total revenue of $15k+',
    details: 'Coordinated cross-functional teams to ensure smooth logistics, vendor management, and crowd control. Handled budgeting, outreach, and sponsor relations to maximize participation and revenue efficiency.Delivered a high-pressure event with zero critical failures and strong post-event feedback.',
  },
  {
    id: '3',
    role: 'HR Intern',
    company: 'SMTC',
    date: '2024',
    description: 'supported HR operation for a large scale International event with 20k+ attendees assisting in coordination and participant management. ',
    details: 'Managed volunteer onboarding, scheduling, and role allocation to ensure smooth event execution. Facilitated communication between teams to streamline attendance tracking and issue resolution. Contributed to maintaining operational efficiency during high-volume, time-sensitive event activities.',
  },
  {
    id: '4',
    role: 'Freelancer',
    company: '',
    date: '2023-2025',
    description: 'Worked with local clients on various Graphic desgin projects helping them build an remarkable online identity for their business.',
    details: 'Designed brand assets including logos, social media creatives, and marketing materials tailored to client needs Collaborated closely with clients to refine visual direction and ensure brand consistency across platforms Delivered design solutions focused on clarity, engagement, and modern aesthetic appeal.',
  },
]

export default function Experience() {
  const [activeId, setActiveId] = useState(null)
  const activeExperience = experiences.find((item) => item.id === activeId)

  useEffect(() => {
    if (activeExperience) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [activeExperience])

  return (
    <section id="experience" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="section-subtitle scroll-reveal reveal-from-right reveal-delay-2">Experience</p>
          <h2 className="section-heading mt-4 font-black text-primary scroll-reveal reveal-from-right reveal-delay-3">A history of thoughtful product work</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((item) => (
            <div key={item.id} className="glass rounded-[2rem] p-8 border-white/20 shadow-[0_30px_80px_rgba(15,23,42,0.08)] flex flex-col justify-between scroll-reveal reveal-from-left reveal-delay-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{item.company}</p>
                <h3 className="mt-4 text-2xl font-semibold text-primary">{item.role}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-slate-500">{item.date}</span>
                <button onClick={() => setActiveId(item.id)} className="inline-flex items-center justify-center rounded-2xl border border-primary/20 px-5 py-3 font-semibold text-primary hover:bg-primary hover:text-white">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeExperience && (
        <div className="modal-overlay" onClick={() => setActiveId(null)}>
          <div className="modal-content glass p-8" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{activeExperience.company}</p>
                <h3 className="mt-3 text-3xl font-bold text-primary">{activeExperience.role}</h3>
                <p className="mt-2 text-sm text-slate-500">{activeExperience.date}</p>
              </div>
              <button onClick={() => setActiveId(null)} className="text-slate-500 hover:text-primary text-2xl font-bold">×</button>
            </div>
            <p className="mt-8 text-slate-600 leading-relaxed">{activeExperience.details}</p>
              {/* Removed static skills list per request */}
          </div>
        </div>
      )}
    </section>
  )
}
