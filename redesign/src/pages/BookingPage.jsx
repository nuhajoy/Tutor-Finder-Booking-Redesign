import { useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { tutors } from "../data/tutors"
import Header from "../components/Header"
import BookingCalendar from "../components/BookingCalendar"
import Footer from "../components/Footer"

function buildAvailability() {
  const now = new Date()
  const base = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 30)
  const slots = []
  for (let i = 0; i < 4; i++) {
    const start = new Date(base.getTime() + i * 24 * 60 * 60 * 1000)
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000)
    slots.push({ start: start.toISOString(), end: end.toISOString() })
  }
  return slots
}

export default function BookingPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const tutor = tutors.find((t) => t.id === id)
  const withSlots = useMemo(() => (tutor ? { ...tutor, availability: buildAvailability() } : null), [tutor])
  const [confirmed, setConfirmed] = useState(null)

  const onConfirm = (details) => {
    if (!details) {
      navigate(-1)
      return
    }
    setConfirmed(details)
    
  }

  if (!tutor) return <div className="p-8">Tutor not found</div>

  return (
    <div className="min-h-screen bg-gray-50/30">
      <Header />
      <main className="max-w-5xl mx-auto px-4 pt-8">
        <div className="mb-4 text-sm text-gray-700">
          Booking with <span className="font-semibold">{tutor.name}</span>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <div className="text-sm text-gray-600 mb-2">
            Select a slot and confirm. Your timezone is auto-detected.
          </div>
          {withSlots && (
            <BookingCalendar tutor={withSlots} onConfirm={onConfirm} />
          )}
          {confirmed && (
            <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-emerald-700">
              Instant confirmation sent
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
