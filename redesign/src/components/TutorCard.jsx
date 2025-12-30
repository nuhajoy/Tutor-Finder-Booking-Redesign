import { Star, Clock, Calendar } from "lucide-react";

function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}

function Button({ children, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-6 py-3 font-semibold transition-all hover:shadow-md ${className}`}
    >
      {children}
    </button>
  );
}

export function TutorCard({ tutor, onView, onBook }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Profile */}
        <div className="lg:w-1/3 flex flex-col items-center text-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#b39ddb]/20 to-[#b39ddb]/10 flex items-center justify-center mb-5">
            <span className="text-4xl font-bold text-[#b39ddb]">
              {tutor.name[0]}
            </span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">{tutor.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{tutor.qualification}</p>
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold text-lg">{tutor.rating.toFixed(1)}</span>
            <span className="text-sm text-gray-500">
              ({tutor.students} students)
            </span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {tutor.languages.map((lang) => (
              <Badge
                key={lang}
                className="bg-gray-100 text-gray-700 border border-gray-200"
              >
                {lang}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="lg:w-2/3 space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
              Teaches
            </h4>
            <div className="flex flex-wrap gap-3">
              {tutor.subjects.map((sub) => (
                <Badge
                  key={sub}
                  className="bg-[#b39ddb]/10 text-[#b39ddb] border border-[#b39ddb]/30"
                >
                  {sub}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-5 text-center">
              <p className="text-xs uppercase text-gray-500 font-medium mb-2">
                Hourly Rate
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {tutor.hourlyRate} Birr{" "}
                <span className="text-sm font-normal text-gray-500">/hr</span>
              </p>
              <p className="text-sm text-gray-500 mt-1 flex items-center justify-center gap-1">
                <Clock className="h-4 w-4" /> 2 Hour Tutoring
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 text-center">
              <p className="text-xs uppercase text-gray-500 font-medium mb-2">
                Next Available
              </p>
              <p className="text-lg font-bold text-[#b39ddb] flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5" />
                {tutor.nextAvailable}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={() => onView?.(tutor)}
            >
              View Profile
            </Button>
            <Button
              className="flex-1 bg-[#c8b9a8] text-white hover:bg-[#b39ddb]"
              onClick={() => onBook?.(tutor)}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
