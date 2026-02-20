import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'abhi96anand@gmail.com', href: 'mailto:abhi96anand@gmail.com' },
  { icon: FaPhone, label: 'Mobile', value: '8770824752', href: 'tel:+918770824752' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Mohali', href: null },
];

// Formspree: messages are sent to abhi96anand@gmail.com
// Get your form ID from https://formspree.io (create form → use that email) and add to .env as VITE_FORMSPREE_ID
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      if (!FORMSPREE_ID) {
        throw new Error('Formspree ID not set. Add VITE_FORMSPREE_ID in .env — see README.');
      }
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
          _replyto: formState.email,
        }),
      });
      if (!res.ok) throw new Error('Could not send message. Please try again.');
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  const handleSendAnother = () => {
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold gradient-text mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-400 mb-12"
        >
          Open to new opportunities and collaborations
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contactInfo.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/10 transition-colors group"
                >
                  <item.icon className="w-6 h-6 text-emerald-400 group-hover:text-cyan-400 transition-colors" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-slate-200 font-medium">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex items-center gap-4 glass rounded-xl p-4"
                >
                  <item.icon className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-slate-200 font-medium">{item.value}</p>
                  </div>
                </div>
              )
            )}
            <p className="text-slate-500 text-sm mt-4">
              Company: <span className="text-slate-300">Avology Technology Pvt Ltd</span>
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="glass rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[280px]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4"
                >
                  <FaCheckCircle className="w-10 h-10 text-emerald-400" />
                </motion.div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2">Message sent!</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={handleSendAnother}
                  className="px-4 py-2 rounded-lg border border-white/20 text-slate-300 text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500/50 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                {error && (
                  <p className="text-red-400 text-sm text-center py-1">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane className="w-4 h-4" />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
