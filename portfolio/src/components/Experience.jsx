import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Avology Technology Pvt Ltd',
    role: 'Full-Stack Developer',
    duration: '3+ Years',
    current: true,
    description: 'Building and maintaining full-stack web applications with React, Node.js, and various databases. Delivering scalable solutions and modern UIs.',
  },
  {
    company: 'Shine Dezign Pvt Ltd',
    role: 'Web Developer',
    duration: '4 Months',
    current: false,
    description: 'First company. Worked on web development projects and gained foundational experience in frontend and backend technologies.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold gradient-text mb-4"
        >
          Experience
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-400 mb-12"
        >
          Where I've worked
        </motion.p>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 border-l-4 border-emerald-500/50"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-slate-100">{exp.company}</h3>
                <span className="badge">{exp.duration}</span>
              </div>
              <p className="text-emerald-400 font-medium mb-2">{exp.role}</p>
              {exp.current && (
                <span className="inline-block text-xs font-medium text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded mb-2">
                  Current
                </span>
              )}
              <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
