import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiWordpress,
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiAxios,
  SiNetlify,
  SiVercel,
  SiRender,
  SiGithub,
} from 'react-icons/si';

const skillGroups = [
  {
    title: 'Frontend',
    color: 'from-cyan-500/20 to-emerald-500/20 border-cyan-500/30',
    items: [
      { name: 'HTML', icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572b6' },
      { name: 'JavaScript', icon: FaJs, color: '#f7df1e' },
      { name: 'React.js', icon: FaReact, color: '#61dafb' },
      { name: 'Redux / Context', icon: SiRedux, color: '#764abc' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
      { name: 'AJAX / Fetch / Axios', icon: SiAxios, color: '#5a29e4' },
    ],
  },
  {
    title: 'Backend',
    color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/30',
    items: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express.js', icon: SiExpress, color: '#000' },
    ],
  },
  {
    title: 'Databases',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
    items: [
      { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    ],
  },
  {
    title: 'CMS & Other',
    color: 'from-violet-500/20 to-purple-500/20 border-violet-500/30',
    items: [
      { name: 'WordPress', icon: SiWordpress, color: '#21759b' },
      { name: 'REST APIs', icon: FaDatabase, color: '#10b981' },
      { name: 'Git / GitHub', icon: FaGitAlt, color: '#f05032' },
      { name: 'Netlify', icon: SiNetlify, color: '#00c7b7' },
      { name: 'GitHub Pages', icon: SiGithub, color: '#181717' },
      { name: 'Render', icon: SiRender, color: '#46e3b7' },
      { name: 'Vercel', icon: SiVercel, color: '#000' },
    ],
  },
];

const extraBadges = ['SEO', 'Website Security & Optimization', 'Deployment'];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold gradient-text mb-4"
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-400 mb-12"
        >
          Technologies I work with
        </motion.p>

        <div className="space-y-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.05 }}
              className={`rounded-2xl border bg-gradient-to-br ${group.color} p-6`}
            >
              <h3 className="text-lg font-semibold text-slate-100 mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item, i) => (
                  <motion.span
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.02 * i }}
                    className="badge flex items-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    {item.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {extraBadges.map((label) => (
              <span key={label} className="badge">
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
