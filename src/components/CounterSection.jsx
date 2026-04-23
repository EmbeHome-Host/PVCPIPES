import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const counters = [
  { label: 'Years Experience', value: 25, suffix: '+' },
  { label: 'Products', value: 40, suffix: '+' },
  { label: 'Dealers', value: 200, suffix: '+' },
  { label: 'Established', value: 2001, suffix: '' },
]

function CounterSection() {
  const counterRef = useRef([])

  useEffect(() => {
    const triggers = []
    counterRef.current.forEach((el, index) => {
      const target = counters[index].value
      const obj = { val: 0 }
      const tween = gsap.to(obj, {
        val: target,
        duration: 2,
        scrollTrigger: { trigger: el, start: 'top 85%' },
        onUpdate: () => {
          if (!el) return
          el.textContent =
            Math.floor(obj.val).toLocaleString() + (counters[index].suffix || '')
        },
      })
      triggers.push(tween)
    })

    return () => {
      triggers.forEach((item) => item.scrollTrigger?.kill())
      triggers.forEach((item) => item.kill())
    }
  }, [])

  return (
    <section
      className="bg-cover bg-fixed bg-center py-16 text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(15,23,42,.86),rgba(15,23,42,.86)), url(https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1800&q=80)',
      }}
    >
      <div className="container-main grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4">
        {counters.map((item, index) => (
          <div key={item.label}>
            <p
              ref={(el) => {
                counterRef.current[index] = el
              }}
              className="text-4xl font-bold"
            >
              0
            </p>
            <p className="mt-2 text-white/80">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CounterSection
