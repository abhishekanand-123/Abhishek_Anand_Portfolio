import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null); // ref for nav (accessibility / future use)

  const closeMenu = () => setMobileOpen(false);
  const toggleMenu = () => setMobileOpen((prev) => !prev);

  // Lock body scroll and close on Escape when menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const handleEscape = (e) => e.key === 'Escape' && closeMenu();
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <nav ref={menuRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#hero" className="text-lg font-semibold gradient-text">
            Abhishek Anand
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button - 44px touch target, touch-action removes 300ms delay */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden min-w-[44px] min-h-[44px] p-2 rounded-lg text-slate-300 hover:bg-white/10 active:bg-white/15 cursor-pointer flex items-center justify-center -mr-2"
            style={{ touchAction: 'manipulation' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu overlay + panel */}
        <AnimatePresence>
          {mobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden top-16 left-0 right-0 bottom-0"
                aria-hidden
                onClick={closeMenu}
              />
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="md:hidden flex flex-col gap-1 pb-4 pt-2 relative z-50 bg-slate-900/95 border-b border-white/10 -mx-4 px-4 sm:-mx-6 sm:px-6 shadow-xl"
              >
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block py-3 px-2 text-slate-300 hover:text-emerald-400 active:bg-white/10 rounded-lg transition-colors min-h-[44px] flex items-center"
                      style={{ touchAction: 'manipulation' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
