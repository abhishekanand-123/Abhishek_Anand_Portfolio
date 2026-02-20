import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiWordpress } from 'react-icons/si';

const mainProjects = [
  {
    id: 1,
    title: 'Full-Stack E-Commerce Web Application',
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
    techIcons: [FaReact, FaNodeJs, SiMysql],
    description:
      'A fully functional ecommerce system with product management, user authentication, cart system, admin dashboard, and secure database architecture. Admin can add/edit/delete products using MySQL. Frontend built with React, backend with Node & Express.',
    features: [
      'Admin Login',
      'Manage Products (CRUD)',
      'Product Images',
      'Add To Cart',
      'Checkout Flow',
      'Secure API',
      'Fully responsive UI',
    ],
    accent: 'emerald',
  },
  {
    id: 2,
    title: 'Employee Management Web App',
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React'],
    techIcons: [FaReact, FaNodeJs, SiMongodb],
    description:
      'A complete employee management system with admin controls. Admin can add employees, assign roles, update records, delete employees, and manage staff data using MongoDB.',
    features: [
      'Admin Panel',
      'Add/Remove/Update Employee',
      'Role-based access',
      'MongoDB database',
      'JWT authentication',
      'Responsive dashboard',
    ],
    accent: 'violet',
  },
];

const otherProjects = [
  'WordPress Custom Websites',
  'API Integrations',
  'Landing Pages',
  'Portfolio Websites',
  'SEO Optimized WordPress Sites',
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold gradient-text mb-4"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-400 mb-12"
        >
          Selected work and side projects
        </motion.p>

        <div className="space-y-8">
          {mainProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass rounded-2xl p-6 md:p-8 card-hover border ${
                project.accent === 'emerald' ? 'hover:shadow-emerald-500/10' : 'hover:shadow-violet-500/10'
              }`}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {project.techIcons.map((Icon, j) => (
                  <Icon key={j} className="w-6 h-6 text-slate-400" />
                ))}
                {project.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.features.map((f) => (
                  <li key={f} className="badge text-slate-300">
                    {f}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <SiWordpress className="w-6 h-6 text-[#21759b]" />
              <h3 className="text-xl font-bold text-slate-100">Other Projects</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400">
              {otherProjects.map((name) => (
                <li key={name} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
