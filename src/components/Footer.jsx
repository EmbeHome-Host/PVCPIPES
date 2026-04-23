import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-primary py-14 text-white">
      <div className="container-main grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold">Sri Ganga PVC Pipes and Paper Plates</h3>
          <p className="mt-3 text-sm text-white/75">
            Trusted Indian manufacturer of quality PVC pipes and paper plates.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Categories</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <span>Electrical Conduits</span>
            <span>UPVC Pipes</span>
            <span>PVC Pressure Pipes</span>
            <span>Blue Casing Pipes</span>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="font-semibold">Contact</h4>
          <p className="flex items-center gap-2">
            <Phone size={16} /> +91 9491571739
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} /> srigangapvcpipes999@gmail.com
          </p>
          <p className="text-white/75">
            Registered brand names: Srigangadhar and Amaravathi
          </p>
          <div className="flex gap-4 pt-2 text-sm text-white/75">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <p className="container-main mt-10 border-t border-white/15 pt-5 text-sm text-white/75">
        © 2025 Sri Ganga PVC Pipes and Paper Plates. All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
