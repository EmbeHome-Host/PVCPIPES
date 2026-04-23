import { Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { testimonials } from '../data/testimonials'

function TestimonialSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setActive((prev) => (prev + 1) % testimonials.length),
      3500,
    )
    return () => clearInterval(timer)
  }, [])

  const current = testimonials[active]

  return (
    <section className="container-main py-16">
      <h2 className="section-title">What Our Customers Say</h2>
      <motion.div
        key={current.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto mt-8 max-w-3xl rounded-2xl bg-secondary p-8 text-center shadow-soft"
      >
        <div className="mb-4 flex justify-center gap-1">
          {Array.from({ length: current.rating }).map((_, index) => (
            <Star key={index} size={18} className="fill-accent text-accent" />
          ))}
        </div>
        <p className="text-lg text-slate-700">"{current.quote}"</p>
        <p className="mt-4 font-semibold text-primary">{current.name}</p>
        <p className="text-sm text-slate-500">{current.location}</p>
        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition ${
                index === active ? 'w-8 bg-accent' : 'w-2.5 bg-primary/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default TestimonialSlider
