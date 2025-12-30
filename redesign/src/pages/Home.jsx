import  Header  from "../components/Header";
import { Star } from "lucide-react"; 
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#b39ddb]/10 to-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            With Fidel Excitement for Learning is Boosted!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore the perfect tailored courses to elevate your skills today.
          </p>
          <div className="flex justify-center gap-8 mb-12">
            <div className="bg-[#b39ddb] text-white rounded-2xl px-6 py-4 shadow-lg">
              2.0k <br /> Students
            </div>
            <div className="bg-[#b39ddb] text-white rounded-2xl px-6 py-4 shadow-lg">
              5.0k <br /> Sessions
            </div>
          </div>
          <button className="bg-[#c8b9a8] hover:bg-[#b39ddb] text-white rounded-full px-8 py-3 font-semibold transition">
            Enroll Now
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {[
            { number: "56", desc: "Skillful Instructors" },
            { number: "285", desc: "Enrolled Happy and Improved Students" },
            { number: "100+", desc: "Improve Live Classes Live" },
            { number: "60", desc: "Leave Free Videoclasses Videoclasses" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h2 className="text-4xl font-bold text-[#b39ddb]">
                {stat.number}
              </h2>
              <p className="text-gray-600">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Newest Courses */}
        <div className="mb-20">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Newest Courses</h2>
            <button className="text-[#b39ddb] font-medium">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Physics Grade 10 Chapter 1 - Vectors & Motion",
                price: "Free",
                date: "21 Jan 2024",
              },
              {
                title: "Maths Grade 8 Algebra Basics",
                price: "Free",
                date: "21 Jan 2024",
              },
              {
                title: "Intro Maths E. Geometry",
                price: "0.5 Hour",
                date: "21 Jan 2024",
              },
            ].map((course, i) => (
              <div
                key={i}
                className="bg-gray-800 text-white rounded-xl p-4 relative"
              >
                <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                <p className="text-sm">
                  {course.price} | {course.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Find the best Tutor */}
        <div className="bg-gradient-to-r from-[#b39ddb]/20 to-[#c8b9a8]/20 rounded-3xl p-12 mb-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Find the best Tutor
          </h2>
          <p className="text-gray-600 mb-8">
            Find the perfect tutor according to different parameters like
            gender, skill level, price, type, rating, etc. Tutors
          </p>
          {/* In Home.jsx "Find the best Tutor" section */}
          <Link
            to="/tutor-finder"
            className="inline-block bg-[#c8b9a8] hover:bg-[#b39ddb] text-white rounded-full px-8 py-3 font-semibold transition shadow-lg"
          >
            Tutor Finder
          </Link>
        </div>

        {/* Instructors */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructors</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "Walelegn Dame",
              "Yodit Temesu",
              "Solomon Zeleke",
              "Belete T.",
            ].map((name, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 shadow-sm text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-3"></div>
                <h3 className="font-bold">{name}</h3>
                <p className="text-sm text-gray-600">Senior Network Engineer</p>
                <div className="flex justify-center gap-1 mt-2">
                  {Array(5)
                    .fill()
                    .map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Categories */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Trending Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              "Language",
              "Elementary",
              "University",
              "Soft Skills",
              "Highschool",
              "Exam Prep",
            ].map((cat, i) => (
              <div
                key={i}
                className={`bg-${
                  ["pink", "green", "blue", "yellow", "purple", "orange"][i]
                }-200 rounded-xl p-4 text-center font-medium`}
              >
                {cat} <br /> 10 Courses
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
