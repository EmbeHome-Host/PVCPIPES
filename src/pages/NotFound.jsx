import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="container-main flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-3 text-4xl font-extrabold text-primary sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-600">
        The page you are looking for does not exist. You can continue browsing our products or
        contact us for assistance.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/" className="btn-primary">
          Go to Home
        </Link>
        <Link to="/contact" className="rounded-full border border-primary px-6 py-3 font-semibold text-primary">
          Contact Team
        </Link>
      </div>
    </section>
  )
}

export default NotFound
