import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { productCategories, products } from '../data/products'

function Products() {
  const [active, setActive] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(timer)
  }, [])

  const filtered =
    active === 'All' ? products : products.filter((product) => product.category === active)

  return (
    <>
      <section
        className="bg-cover bg-center py-16 text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,.82),rgba(15,23,42,.88)), url(https://images.unsplash.com/photo-1675176785665-8d6aef6b7d8a?auto=format&fit=crop&w=2000&q=80)',
        }}
      >
        <div className="container-main">
          <h1 className="text-4xl font-extrabold md:text-5xl">Our Products</h1>
          <p className="mt-3 max-w-3xl text-lg text-white/85">
            Explore our full range of PVC and UPVC pipes manufactured for reliable performance across
            agriculture, domestic plumbing, and construction projects.
          </p>
        </div>
      </section>
      <section className="bg-secondary py-14">
        <div className="container-main">
          <div className="flex flex-wrap gap-3">
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                type="button"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-primary hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {loading ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-72 animate-pulse rounded-2xl bg-slate-200" />
              ))}
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
              }}
              className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  )
}

export default Products
