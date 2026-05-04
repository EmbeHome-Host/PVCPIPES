import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BadgeCheck, IndianRupee, Truck } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CounterSection from '../components/CounterSection'
import ProductCard from '../components/ProductCard'
import TestimonialSlider from '../components/TestimonialSlider'
import { products } from '../data/products'

const features = [
  { title: 'Durable & Long Lasting', icon: BadgeCheck },
  { title: 'Affordable Pricing', icon: IndianRupee },
  { title: 'Wide Distribution Network', icon: Truck },
]

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const fullText = 'Strong Pipes. Stronger Futures.'
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    let i = 0
    const writer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1))
      i += 1
      if (i === fullText.length) clearInterval(writer)
    }, 70)
    return () => clearInterval(writer)
  }, [])

  useEffect(() => {
    const elements = gsap.utils.toArray('.reveal-up')
    const anims = []
    elements.forEach((el) => {
      const tween = gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        },
      )
      anims.push(tween)
    })

    return () => {
      anims.forEach((item) => item.scrollTrigger?.kill())
      anims.forEach((item) => item.kill())
    }
  }, [])

  return (
    <div>
      <section
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,.76),rgba(15,23,42,.76)), url(https://images.unsplash.com/photo-1729169927271-7826d8aae360?auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        <div className="container-main flex min-h-screen flex-col items-start justify-center pb-16 pt-32 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl"
          >
            {typedText}
          </motion.h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">
            High-quality PVC pipes for agriculture, plumbing, and construction with trusted
            manufacturing standards.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary">Explore Products</Link>
            <Link to="/contact" className="btn-outline">Get a Quote</Link>
          </div>
          <div className="mt-10 grid w-full max-w-4xl gap-3 rounded-xl bg-white/10 p-4 backdrop-blur sm:grid-cols-2 lg:grid-cols-4">
            {['Established in 2001', '25+ Years Experience', '40+ Products', '200+ Dealers'].map(
              (item) => (
                <p key={item} className="text-sm font-semibold text-white/90">
                  {item}
                </p>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="container-main reveal-up py-20 text-center">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle mx-auto">
          We combine stringent quality controls, robust materials, and responsive service to
          support projects across India.
        </p>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm hover:shadow-soft"
            >
              <feature.icon className="mx-auto text-accent" />
              <h3 className="mt-3 font-semibold text-primary">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="reveal-up bg-secondary py-20">
        <div className="container-main">
          <h2 className="section-title">Product Categories</h2>
          <p className="section-subtitle">
            Designed for agriculture, plumbing, and infrastructure with consistent quality and
            ready stock for bulk orders.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CounterSection />
      <TestimonialSlider />

      <section
        className="relative overflow-hidden bg-cover bg-center py-16 text-center text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,.9),rgba(15,23,42,.92)), url(https://images.unsplash.com/photo-1654695376026-a4bec76a1081?auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        <p className="container-main text-2xl font-bold">
          Need a Custom Quote? We supply in bulk for agriculture & construction.
        </p>
        <Link to="/contact" className="btn-primary mt-6">
          Contact Us Today
        </Link>
      </section>
    </div>
  )
}

export default Home
