import { motion } from 'framer-motion'

function About() {
  return (
    <div className="bg-white">
      <section className="container-main grid gap-10 py-16 lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1000&q=80"
          alt="Factory"
          loading="lazy"
          className="h-full min-h-72 w-full rounded-2xl object-cover"
        />
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-extrabold text-primary md:text-5xl">About Sri Ganga PVC Pipes and Paper Plates</h1>
          <p className="mt-4 text-slate-600">
            We are a trusted PVC pipe and paper plate manufacturer serving agriculture, plumbing,
            and infrastructure projects with dependable quality.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-secondary p-4">
              <h3 className="font-semibold text-primary">Mission</h3>
              <p className="mt-2 text-sm text-slate-600">
                Deliver high-performance piping solutions at affordable prices.
              </p>
            </div>
            <div className="rounded-xl bg-secondary p-4">
              <h3 className="font-semibold text-primary">Vision</h3>
              <p className="mt-2 text-sm text-slate-600">
                Be India&apos;s most trusted PVC piping brand for quality and service.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container-main">
          <h2 className="section-title">Milestones</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              '2001 - Company Founded',
              'Registered brands - Srigangadhar & Amaravathi',
              '2017 - Regional Expansion',
              '2024 - 10,000+ Clients',
            ].map((item) => (
              <div key={item} className="rounded-xl bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-main py-16">
        <h2 className="section-title">Manufacturing Facility</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80',
          ].map((src) => (
            <img
              key={src}
              src={src}
              alt="Plant"
              loading="lazy"
              className="h-56 w-full rounded-xl object-cover"
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
