import { Loader2, MessageCircle } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [loading, setLoading] = useState(false)
  const whatsappNumber = '919491571739'

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    setLoading(true)
    const formData = new FormData(form)
    const details = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      interest: formData.get('interest'),
      quantity: formData.get('quantity'),
      message: formData.get('message'),
    }

    const text = [
      'Hello Sri Ganga PVC Pipes and Paper Plates,',
      '',
      'New enquiry details:',
      `Name: ${details.name}`,
      `Phone: ${details.phone}`,
      `Email: ${details.email}`,
      `Product Interest: ${details.interest}`,
      `Quantity Requirement: ${details.quantity}`,
      `Message: ${details.message}`,
    ].join('\n')

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setLoading(false)
    form.reset()
  }

  return (
    <section className="bg-secondary py-16">
      <div className="container-main grid gap-8 lg:grid-cols-2">
        <div className="order-1 space-y-6 lg:order-1 lg:pt-6">
          <h2 className="text-3xl font-bold text-primary">Company Details</h2>
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-primary">
              Sri Ganga PVC Pipes and Paper Plates
            </h3>
            <p className="max-w-xl text-base text-slate-600">
              Trusted manufacturer of quality PVC pipes and paper plates, serving dealers,
              contractors, and bulk buyers with reliable supply.
            </p>
          </div>
          <p className="text-lg text-slate-700">+91 9491571739</p>
          <p className="text-lg text-slate-700">srigangapvcpipes999@gmail.com</p>
          <p className="text-base text-slate-600">
            Registered brand names: Srigangadhar and Amaravathi
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white"
          >
            <MessageCircle size={16} />
            Chat Directly on WhatsApp
          </a>
          <div className="pt-10">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Established</p>
            <p
              className="text-6xl font-extrabold leading-none text-transparent md:text-8xl"
              style={{ WebkitTextStroke: '2px rgba(15,23,42,0.75)' }}
            >
              Since 2001
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="order-2 space-y-4 rounded-2xl bg-white p-7 shadow-soft ring-1 ring-slate-200"
        >
          <h1 className="text-3xl font-extrabold text-primary">Contact Us</h1>
          <p className="text-sm text-slate-600">
            Fill all details and click submit. You will be redirected to WhatsApp with your
            enquiry message ready to send.
          </p>
          <input className="w-full rounded-lg border p-3" placeholder="Name" name="name" required />
          <input
            className="w-full rounded-lg border p-3"
            placeholder="Phone (10 digits)"
            name="phone"
            pattern="[0-9]{10}"
            required
          />
          <input
            className="w-full rounded-lg border p-3"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <select className="w-full rounded-lg border p-3" name="interest" defaultValue="" required>
            <option value="" disabled>
              Product Interest
            </option>
            <option>Electrical Conduit Pipe</option>
            <option>UPVC Pipes</option>
            <option>PVC Pressure Pipe</option>
            <option>Blue Casing Pipe</option>
          </select>
          <input
            className="w-full rounded-lg border p-3"
            placeholder="Quantity Requirement (e.g., 500 meters)"
            name="quantity"
            required
          />
          <textarea
            className="w-full rounded-lg border p-3"
            rows="4"
            placeholder="Message"
            name="message"
            required
          />
          <button type="submit" className="btn-primary w-full">
            {loading ? <Loader2 className="animate-spin" /> : 'Submit Enquiry on WhatsApp'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
