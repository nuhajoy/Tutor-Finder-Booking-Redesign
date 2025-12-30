// pages/TutorFinderForm.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import  Header  from "../components/Header";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Video,
  Users,
  User,
  BookOpen,
  Target,
  Clock,
} from "lucide-react";
import Footer from "../components/Footer";

export default function TutorFinderForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    subject: "",
    meetingLocation: "Online",
    classSize: "One-on-One",
    learningGoal: "Prepare for Exams",
    preferredDays: "Weekdays",
    specificDays: [],
    timeOfDay: "Afternoon",
    flexible: false,
  });

  const update = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const next = () => setStep((prev) => Math.min(prev + 1, 4));
  const prev = () => setStep((prev) => Math.max(prev - 1, 1));

  const finish = () => {
    
    navigate("/find-tutor", { state: { filters: formData } });
  };

  const progressWidth = `${(step / 4) * 100}%`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <main className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Progress Bar */}
            <div className="px-10 pt-8 pb-4">
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span>Step {step} of 4</span>
                <span className="capitalize">
                  {step === 1 && "Subject Selection"}
                  {step === 2 && "Preferences"}
                  {step === 3 && "Learning Goal"}
                  {step === 4 && "Almost done!"}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: progressWidth }}
                />
              </div>
            </div>

            <div className="px-10 pb-10 pt-6">
              {/* Step 1: Subject */}
              {step === 1 && (
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    What subject sparks your interest?
                  </h1>
                  <p className="text-gray-600 mb-10 max-w-md mx-auto">
                    Find the perfect expert to help you master your goals.
                  </p>

                  <div className="max-w-md mx-auto">
                    <div className="relative">
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <select
                        value={formData.subject}
                        onChange={(e) => update("subject", e.target.value)}
                        className="w-full pl-12 pr-10 py-5 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="">Select a category...</option>
                        <option>Physics</option>
                        <option>Mathematics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                        <option>English</option>
                        <option>Computer Science</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <ChevronRight className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mt-6">
                    Popular now: Grade 12 Physics, English
                  </p>

                  <button
                    onClick={next}
                    disabled={!formData.subject}
                    className="mt-10 w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-5 rounded-full text-lg transition shadow-lg"
                  >
                    Next Step →
                  </button>
                </div>
              )}

              {/* Step 2: Preferences */}
              {step === 2 && (
                <div>
                  <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
                    How do you prefer to learn?
                  </h1>
                  <p className="text-center text-gray-600 mb-10">
                    Tell us about your ideal learning environment so we can
                    match you with the perfect tutor.
                  </p>

                  {/* Meeting Location */}
                  <div className="mb-10">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                      Meeting Location
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => update("meetingLocation", "Online")}
                        className={`p-6 rounded-2xl border-2 transition-all ${
                          formData.meetingLocation === "Online"
                            ? "border-purple-600 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <Video className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                        <p className="font-semibold">Online Session</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Learn from the comfort of your home via video call.
                        </p>
                      </button>
                      <button
                        onClick={() => update("meetingLocation", "In-Person")}
                        className={`p-6 rounded-2xl border-2 transition-all ${
                          formData.meetingLocation === "In-Person"
                            ? "border-purple-600 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <Users className="h-10 w-10 text-green-600 mx-auto mb-3" />
                        <p className="font-semibold">In-Person</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Meet face-to-face at a library, cafe, or home.
                        </p>
                      </button>
                    </div>
                  </div>

                  {/* Class Size */}
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                      Class Size Preference
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => update("classSize", "One-on-One")}
                        className={`p-6 rounded-2xl border-2 transition-all ${
                          formData.classSize === "One-on-One"
                            ? "border-purple-600 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <User className="h-10 w-10 text-purple-600 mx-auto mb-3" />
                        <p className="font-semibold">One-on-One</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Personalized attention for faster progress.
                        </p>
                      </button>
                      <button
                        onClick={() => update("classSize", "Group Class")}
                        className={`p-6 rounded-2xl border-2 transition-all ${
                          formData.classSize === "Group Class"
                            ? "border-purple-600 bg-purple-50"
                            : "border-gray-200 hover:border-purple-300"
                        }`}
                      >
                        <Users className="h-10 w-10 text-orange-600 mx-auto mb-3" />
                        <p className="font-semibold">Group Class</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Learn with peers in a collaborative setting.
                        </p>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between mt-10">
                    <button
                      onClick={prev}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
                    >
                      <ChevronLeft className="h-5 w-5" /> Back
                    </button>
                    <button
                      onClick={next}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full transition shadow-lg"
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Learning Goal */}
              {step === 3 && (
                <div>
                  <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
                    What's your learning goal?
                  </h1>
                  <p className="text-center text-gray-600 mb-10">
                    Tell us what you want to achieve so we can match you with
                    the perfect tutor tailored to your specific needs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <button
                      onClick={() =>
                        update("learningGoal", "Master Fundamentals")
                      }
                      className={`p-8 rounded-2xl border-2 transition-all relative ${
                        formData.learningGoal === "Master Fundamentals"
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="h-7 w-7 text-blue-600" />
                      </div>
                      <p className="font-bold text-lg">Master Fundamentals</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Build a strong foundation in core subjects to boost
                        confidence.
                      </p>
                    </button>

                    <button
                      onClick={() =>
                        update("learningGoal", "Prepare for Exams")
                      }
                      className={`p-8 rounded-2xl border-2 transition-all relative ${
                        formData.learningGoal === "Prepare for Exams"
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                      <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Target className="h-7 w-7 text-purple-600" />
                      </div>
                      <p className="font-bold text-lg">Prepare for Exams</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Targeted practice and revision for upcoming tests and
                        finals.
                      </p>
                    </button>

                    <button
                      onClick={() =>
                        update("learningGoal", "Advanced Concepts")
                      }
                      className={`p-8 rounded-2xl border-2 transition-all relative ${
                        formData.learningGoal === "Advanced Concepts"
                          ? "border-purple-600 bg-purple-50"
                          : "border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Target className="h-7 w-7 text-green-600" />
                      </div>
                      <p className="font-bold text-lg">Advanced Concepts</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Deep dive into complex topics to challenge your
                        understanding.
                      </p>
                    </button>
                  </div>

                  <div className="flex justify-between mt-12">
                    <button
                      onClick={prev}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
                    >
                      <ChevronLeft className="h-5 w-5" /> Prev
                    </button>
                    <button
                      onClick={next}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full transition shadow-lg"
                    >
                      Next Step →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Availability */}
              {step === 4 && (
                <div>
                  <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
                    When are you available?
                  </h1>
                  <p className="text-center text-gray-600 mb-10">
                    Select the days and times that work best for your learning
                    schedule.
                  </p>

                  {/* Preferred Days */}
                  <div className="mb-10">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                      Preferred Days
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        "Weekdays\nMon - Fri",
                        "Weekends\nSat & Sun",
                        "Specific Days\nPick your own",
                      ].map((option, i) => {
                        const value = ["Weekdays", "Weekends", "Specific Days"][
                          i
                        ];
                        return (
                          <button
                            key={value}
                            onClick={() => update("preferredDays", value)}
                            className={`p-6 rounded-2xl border-2 transition-all text-center ${
                              formData.preferredDays === value
                                ? "border-purple-600 bg-purple-50"
                                : "border-gray-200 hover:border-purple-300"
                            }`}
                          >
                            <Calendar className="h-8 w-8 mx-auto mb-3 text-purple-600" />
                            <p className="text-sm whitespace-pre-line font-medium">
                              {option}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {formData.preferredDays === "Specific Days" && (
                      <div className="mt-6 flex justify-center gap-3">
                        {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
                          <button
                            key={day}
                            className={`w-10 h-10 rounded-full font-medium transition-all ${
                              formData.specificDays.includes(day)
                                ? "bg-purple-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-purple-100"
                            }`}
                            onClick={() => {
                              const days = formData.specificDays.includes(day)
                                ? formData.specificDays.filter((d) => d !== day)
                                : [...formData.specificDays, day];
                              update("specificDays", days);
                            }}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Time of Day */}
                  <div className="mb-10">
                    <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                      Time of Day
                    </h3>
                    <div className="flex gap-4 justify-center">
                      {["Morning", "Afternoon", "Evening"].map((time) => (
                        <button
                          key={time}
                          onClick={() => update("timeOfDay", time)}
                          className={`px-8 py-4 rounded-full border-2 transition-all ${
                            formData.timeOfDay === time
                              ? "border-purple-600 bg-purple-50 text-purple-700 font-semibold"
                              : "border-gray-200 hover:border-purple-300"
                          }`}
                        >
                          <Clock className="h-5 w-5 mx-auto mb-2" />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="flex items-center justify-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.flexible}
                      onChange={(e) => update("flexible", e.target.checked)}
                      className="w-5 h-5 accent-purple-600 rounded"
                    />
                    <span className="text-gray-700">
                      I'm flexible with my schedule
                    </span>
                  </label>

                  <div className="flex justify-between mt-12">
                    <button
                      onClick={prev}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
                    >
                      <ChevronLeft className="h-5 w-5" /> Prev
                    </button>
                    <button
                      onClick={finish}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-4 px-10 rounded-full transition shadow-lg"
                    >
                      Find Tutors
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
