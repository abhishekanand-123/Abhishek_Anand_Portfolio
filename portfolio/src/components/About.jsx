import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold gradient-text mb-8"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 md:p-8 space-y-4 text-slate-300 leading-relaxed"
        >
          <p>
            I'm a <strong className="text-slate-100">Full-Stack Developer</strong> with over 3 years of experience,
            currently at <strong className="text-emerald-400">Avology Technology Pvt Ltd</strong>. I build modern web
            applications using React, Node.js, and both SQL and NoSQL databases.
          </p>
          <p>
            My journey started at <strong className="text-amber-400/90">Shine Dezign Pvt Ltd</strong>, my first company,
            where I spent 4 months as a Web Developer. Since then, I've grown into full-stack development—from
            responsive UIs with React and Tailwind to secure REST APIs with Node and Express, and from MySQL to MongoDB.
          </p>
          <p>
            I'm passionate about clean code, scalable architecture, and delivering products that users love. I also work
            with <strong className="text-slate-100">WordPress</strong> for CMS projects, and I care about SEO, security,
            and performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
