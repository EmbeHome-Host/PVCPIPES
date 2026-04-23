import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

function BackToTopButton() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-5 z-40 rounded-full bg-primary p-3 text-white shadow-lg transition hover:-translate-y-0.5"
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}

export default BackToTopButton
