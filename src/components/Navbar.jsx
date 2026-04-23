import { Menu, Phone, Waves, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-primary/95 text-white backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'shadow-soft' : ''
      }`}
    >
      <nav className="container-main flex h-20 items-center justify-between text-white">
        <Link to="/" className="flex items-center gap-2 font-bold tracking-wide">
          <Waves />
          <span className="text-sm sm:text-base">Sri Ganga PVC Pipes and Paper Plates</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-medium transition ${isActive ? 'text-accent' : 'text-white'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a href="tel:+919491571739" className="flex items-center gap-2 text-sm">
            <Phone size={16} /> +91 9491571739
          </a>
          <Link to="/contact" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold">
            Get Quote
          </Link>
        </div>

        <button
          className="rounded-md p-1 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="bg-primary/95 px-6 pb-6 pt-2 text-white md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
                  {item.label}
                </NavLink>
              ))}
              <a href="tel:+919491571739" className="pt-2 text-sm">
                +91 9491571739
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
