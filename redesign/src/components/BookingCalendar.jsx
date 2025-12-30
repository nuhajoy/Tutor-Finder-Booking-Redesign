// pages/BookingCalendar.jsx
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { tutors } from "../data/tutors";
import {
  ChevronLeft,
  ChevronRight,
  Globe,
  CheckCircle,
  Calendar as CalendarIcon,
  Clock,
  PartyPopper,
  ArrowRight,
  Home,
  Video,
  MapPin,
  User,
  Users,
} from "lucide-react";

export default function BookingCalendar({ tutor: tutorProp, onConfirm }) {
  const navigate = useNavigate();
  const tutor = tutorProp || tutors[0];

  const [userTimeZone, setUserTimeZone] = useState("");
  useEffect(() => {
    setUserTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

 
  const [currentViewDate, setCurrentViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [meetingType, setMeetingType] = useState("Online");
  const [classPopulation, setClassPopulation] = useState("One-on-One");
  const [isBooked, setIsBooked] = useState(false);

 
  const viewYear = currentViewDate.getFullYear();
  const viewMonth = currentViewDate.getMonth();
  const monthName = currentViewDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });
  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const calendarDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) calendarDays.push(null);
  for (let d = 1; d <= daysInMonth; d++) calendarDays.push(d);

  const isPastDate = (day) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(viewYear, viewMonth, day) < today;
  };

  const handleBooking = () => {
    setIsBooked(true);
    if (onConfirm)
      onConfirm({
        tutor,
        selectedDate,
        selectedTime,
        meetingType,
        classPopulation,
      });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] flex items-center justify-center p-4 font-sans">
      {!isBooked ? (
        /* BOOKING FLOW */
        <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row">
          <div className="flex-1 p-8 lg:p-10 border-r border-gray-50">
            <header className="mb-6">
              <button
                onClick={() => navigate(-1)}
                className="text-gray-400 hover:text-[#b39ddb] flex items-center gap-1 text-sm mb-4"
              >
                <ChevronLeft size={16} /> Back
              </button>
              <h1 className="text-2xl font-bold text-gray-900">
                Book with {tutor.name}
              </h1>
              <div className="flex items-center gap-2 text-gray-400 text-xs mt-2 bg-gray-50 w-fit px-3 py-1 rounded-full border border-gray-100">
                <Globe size={12} /> <span>{userTimeZone}</span>
              </div>
            </header>

            <div className="space-y-6">
              {/* MEETING TYPE & SIZE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Meeting Type
                  </h3>
                  <div className="flex gap-2">
                    {["Online", "In-Person"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setMeetingType(type)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold border-2 transition-all ${
                          meetingType === type
                            ? "border-[#b39ddb] bg-[#b39ddb]/5 text-[#b39ddb]"
                            : "border-gray-50 text-gray-400"
                        }`}
                      >
                        {type === "Online" ? (
                          <Video size={14} />
                        ) : (
                          <MapPin size={14} />
                        )}{" "}
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Class Size
                  </h3>
                  <div className="flex gap-2">
                    {["One-on-One", "Group"].map((pop) => (
                      <button
                        key={pop}
                        onClick={() => setClassPopulation(pop)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold border-2 transition-all ${
                          classPopulation === pop
                            ? "border-[#b39ddb] bg-[#b39ddb]/5 text-[#b39ddb]"
                            : "border-gray-50 text-gray-400"
                        }`}
                      >
                        {pop === "One-on-One" ? (
                          <User size={14} />
                        ) : (
                          <Users size={14} />
                        )}{" "}
                        {pop}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* CALENDAR */}
              <section>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Pick a Date
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setCurrentViewDate(new Date(viewYear, viewMonth - 1))
                      }
                      className="p-1 hover:bg-gray-100 rounded-lg"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <span className="font-bold text-xs w-24 text-center">
                      {monthName}
                    </span>
                    <button
                      onClick={() =>
                        setCurrentViewDate(new Date(viewYear, viewMonth + 1))
                      }
                      className="p-1 hover:bg-gray-100 rounded-lg"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 bg-gray-50/50 p-2 rounded-2xl border border-gray-100">
                  {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                    <div
                      key={d}
                      className="text-[10px] font-bold text-gray-300 text-center py-1"
                    >
                      {d}
                    </div>
                  ))}
                  {calendarDays.map((day, i) => (
                    <button
                      key={i}
                      disabled={!day || isPastDate(day)}
                      onClick={() => setSelectedDate(day)}
                      className={`h-8 w-full rounded-lg text-xs font-bold transition-all ${
                        selectedDate === day
                          ? "bg-[#b39ddb] text-white shadow-md"
                          : day && !isPastDate(day)
                          ? "hover:bg-white text-gray-700 hover:shadow-sm"
                          : "text-gray-200"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </section>

              {/* TIME */}
              <section>
                <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                  Select Time
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {["09:00 AM", "10:30 AM", "01:00 PM", "04:00 PM"].map(
                    (time) => (
                      <button
                        key={time}
                        disabled={!selectedDate}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 rounded-xl text-[11px] font-bold transition-all border-2 ${
                          selectedTime === time
                            ? "border-[#b39ddb] bg-[#b39ddb] text-white"
                            : "border-gray-50 bg-gray-50 text-gray-500 hover:border-gray-200 disabled:opacity-30"
                        }`}
                      >
                        {time}
                      </button>
                    )
                  )}
                </div>
              </section>
            </div>
          </div>

          <div className="w-full md:w-[320px] bg-[#FAF9F6] p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#b39ddb] rounded-2xl flex items-center justify-center text-white font-bold text-xl uppercase">
                  {tutor.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{tutor.name}</p>
                  <p className="text-[10px] text-[#b39ddb] font-bold uppercase">
                    {meetingType} • {classPopulation}
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <CalendarIcon size={16} className="text-[#b39ddb]" />
                  <span className="text-xs font-bold">
                    {selectedDate
                      ? `${monthName} ${selectedDate}`
                      : "Pick a date"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Clock size={16} className="text-[#b39ddb]" />
                  <span className="text-xs font-bold">
                    {selectedTime || "Pick a slot"}
                  </span>
                </div>
                <div className="pt-3 border-t border-gray-50 flex justify-between">
                  <span className="text-xs font-bold text-gray-400">Rate</span>
                  <span className="text-sm font-black text-gray-900">
                    {tutor.hourlyRate} Birr
                  </span>
                </div>
              </div>
            </div>
            <button
              onClick={handleBooking}
              disabled={!selectedDate || !selectedTime}
              className="w-full bg-[#b39ddb] text-white py-4 rounded-2xl font-bold text-sm hover:bg-[#9575cd] transition-all disabled:bg-gray-200 shadow-lg shadow-[#b39ddb]/20"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      ) : (
        /* SUCCESS PAGE */
        <div className="w-full max-w-lg bg-white rounded-[3.5rem] p-12 text-center shadow-2xl animate-in fade-in zoom-in duration-500 border border-gray-50">
          <div className="relative w-28 h-28 mx-auto mb-10">
            <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20"></div>
            <div className="relative w-full h-full bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-green-200">
              <PartyPopper size={48} />
            </div>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Confirmed!</h2>
          <p className="text-gray-500 text-base mb-10 px-4">
            Your{" "}
            <span className="font-bold text-gray-800">{classPopulation}</span>{" "}
            session with{" "}
            <span className="font-bold text-[#b39ddb]">{tutor.name}</span> is
            set.
          </p>

          <div className="bg-[#FAF9F6] rounded-[2.5rem] p-8 mb-10 text-left space-y-4 border border-gray-100">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                Date
              </span>
              <span className="text-base font-bold text-gray-800">
                {monthName} {selectedDate}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                Time
              </span>
              <span className="text-base font-bold text-gray-800">
                {selectedTime}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                Type
              </span>
              <span className="text-base font-bold text-[#b39ddb]">
                {meetingType}
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate("/")}
            className="w-full bg-gray-900 text-white py-5 rounded-3xl font-bold text-base hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl shadow-gray-200"
          >
            <Home size={20} /> Back to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
