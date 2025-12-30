import { useParams, useNavigate } from "react-router-dom"
import { tutors } from "../data/tutors"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function TutorProfile() {
  const { id } = useParams()
  const navigate = useNavigate()
  const tutor = tutors.find((t) => t.id === id)

  if (!tutor) {
    return <div className="p-8">Tutor not found</div>
  }

  const goBack = () => navigate(-1)
  const goBook = () => navigate(`/booking/${tutor.id}`)

  return (
    <div className="min-h-screen bg-gray-50/30 pb-20">
      <Header />
      <main className="max-w-5xl mx-auto px-4 pt-8">
        <button onClick={goBack} className="mb-4 text-sm text-gray-600">
          ← Back
        </button>
        <div className="bg-white rounded-3xl border p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">
                  {tutor.name[0]}
                </span>
              </div>
              <div className="mt-4">
                <div className="text-xl font-bold">{tutor.name}</div>
                <div className="text-sm text-gray-500">
                  {tutor.qualification}
                </div>
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <div>
                <div className="text-xs uppercase text-gray-500 font-semibold">
                  Teaches
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {tutor.subjects.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-gray-50 border px-3 py-1 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl bg-gray-50 border p-4 text-center">
                  <div className="text-xs uppercase text-gray-500">
                    Hourly Rate
                  </div>
                  <div className="text-lg font-semibold">
                    {tutor.hourlyRate} Birr/hr
                  </div>
                </div>
                <div className="rounded-xl bg-gray-50 border p-4 text-center">
                  <div className="text-xs uppercase text-gray-500">
                    Next Available
                  </div>
                  <div className="text-lg font-medium text-emerald-600">
                    {tutor.nextAvailable}
                  </div>
                </div>
                <div className="rounded-xl bg-gray-50 border p-4 text-center">
                  <div className="text-xs uppercase text-gray-500">
                    Languages
                  </div>
                  <div className="text-sm text-gray-700">
                    {tutor.languages.join(", ")}
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={goBook}
                  className="flex-1 h-12 rounded-xl bg-primary text-white font-bold"
                >
                  Book Now
                </button>
                <button
                  onClick={goBack}
                  className="flex-1 h-12 rounded-xl border"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
