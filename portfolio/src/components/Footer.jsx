import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="border-t border-white/10 py-8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-slate-500 text-sm">
        <p className="font-medium text-slate-400">© {year} Abhishek Anand — Avology Technology</p>
      </div>
    </motion.footer>
  );
}
