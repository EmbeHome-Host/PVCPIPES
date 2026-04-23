import { MessageCircle } from 'lucide-react'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919491571739?text=Hello%20Sri%20Ganga%20PVC%20Pipes%20and%20Paper%20Plates,%20I%20need%20a%20quote."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 p-4 text-white shadow-lg transition hover:scale-105 animate-pulseSlow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle />
    </a>
  )
}

export default WhatsAppButton
