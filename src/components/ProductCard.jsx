import { motion } from 'framer-motion'

function ProductCard({ product }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:shadow-soft"
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-bold text-primary">{product.name}</h3>
        <p className="text-sm text-slate-600">Sizes: {product.sizes}</p>
        <p className="text-sm text-slate-600">Pressure: {product.pressure}</p>
        <p className="text-sm text-slate-600">{product.description}</p>
        <a
          href="https://wa.me/919491571739?text=I%20want%20to%20enquire%20about%20your%20products."
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
        >
          Enquire Now
        </a>
      </div>
    </motion.article>
  )
}

export default ProductCard
