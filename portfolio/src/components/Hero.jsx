import { useState } from 'react';
import { motion } from 'framer-motion';

// Add your photo as: public/profile.jpg (or .png, .webp)
const PROFILE_IMAGE = '/profile.jpg';

export default function Hero() {
  const [imgError, setImgError] = useState(false);
  const showFallback = imgError;

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.25), transparent),
            radial-gradient(ellipse 60% 40% at 100% 50%, rgba(34, 211, 238, 0.15), transparent),
            radial-gradient(ellipse 50% 30% at 0% 80%, rgba(139, 92, 246, 0.15), transparent)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Floating gradient blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[10%] w-72 h-72 bg-emerald-500/20 rounded-full blur-[80px]"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-32 left-[5%] w-64 h-64 bg-cyan-500/15 rounded-full blur-[70px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-500/15 rounded-full blur-[100px]"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
        {/* Left: Copy */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for hire
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-slate-400 text-lg mb-1"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="gradient-text">Abhishek Anand</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-slate-200 mt-4 font-semibold"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-slate-500 text-base sm:text-lg mt-2"
          >
            React • Node.js • SQL • MongoDB • WordPress
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/10 border border-amber-500/25 text-amber-400 text-sm font-semibold"
          >
            3+ Years Experience
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mt-10"
          >
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:scale-105"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl glass border border-white/20 text-slate-200 font-semibold hover:bg-white/10 hover:border-emerald-500/50 transition-all"
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* Right: Photo + terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex-shrink-0 w-full lg:max-w-md flex flex-col items-center gap-6"
        >
          {/* Profile photo */}
          <div className="relative">
            <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1 bg-gradient-to-br from-emerald-500 via-cyan-500 to-violet-500 shadow-xl shadow-emerald-500/20">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
                {showFallback ? (
                  <span className="text-4xl sm:text-5xl font-bold gradient-text">AA</span>
                ) : (
                  <img
                    src={PROFILE_IMAGE}
                    alt="Abhishek Anand"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-emerald-500/5 w-full">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-slate-500 font-mono text-xs ml-2">portfolio</span>
            </div>
            <div className="p-5 font-mono text-sm text-slate-400 space-y-2">
              <p><span className="text-emerald-400">const</span> <span className="text-cyan-400">developer</span> = {'{'}</p>
              <p className="pl-4"><span className="text-amber-400">name:</span> <span className="text-slate-300">"Abhishek Anand"</span>,</p>
              <p className="pl-4"><span className="text-amber-400">role:</span> <span className="text-slate-300">"Full-Stack Developer"</span>,</p>
              <p className="pl-4"><span className="text-amber-400">stack:</span> [<span className="text-slate-300">"React"</span>, <span className="text-slate-300">"Node"</span>, <span className="text-slate-300">"MySQL"</span>, <span className="text-slate-300">"MongoDB"</span>],</p>
              <p className="pl-4"><span className="text-amber-400">experience:</span> <span className="text-emerald-400">"3+ years"</span></p>
              <p>{'}'}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
