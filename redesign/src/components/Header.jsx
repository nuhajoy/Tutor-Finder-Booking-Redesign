// components/Header.jsx
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  Mic,
  ShoppingCart,
  Bell,
  Grid,
  ChevronLeft,
} from "lucide-react";

export default function Header() {
  const location = useLocation();
  return (
    <div className="w-full bg-white border-b sticky top-0 z-50 shadow-sm">
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex-1 max-w-xl relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search tutors, subjects..."
            className="w-full pl-12 pr-12 py-2.5 bg-gray-100 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#b39ddb]/50"
          />
          <Mic className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" />
        </div>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-5">
            <ShoppingCart className="h-5 w-5 text-gray-600 cursor-pointer hover:text-[#b39ddb] transition" />
            <div className="relative">
              <Bell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-[#b39ddb] transition" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link
              to="/login"
              className="text-gray-700 hover:text-[#b39ddb] transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-gray-700 hover:text-[#b39ddb] transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
         
            <Link
              to="/"
              className="lg:hidden flex items-center gap-2 text-gray-700 hover:text-[#b39ddb] transition"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="text-sm">Home</span>
            </Link>
        
          {/* Logo  */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#b39ddb] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              FIDEL TUTORIAL
            </span>
          </Link>

          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full flex items-center gap-2 px-5 py-2.5 font-medium transition">
            <Grid className="h-4 w-4" />
            Categories
          </button>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link
              to="/"
              className="text-gray-700 hover:text-[#b39ddb] transition"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="text-gray-700 hover:text-[#b39ddb] transition"
            >
              Courses
            </Link>
            <Link
              to="/find-tutor"
              className="text-gray-700 hover:text-[#b39ddb] transition"
            >
              Find Tutor
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-[#b39ddb] transition"
            >
              About us
            </Link>
          </nav>
        </div>

        <Link
          to="/start-learning"
          className="bg-[#c8b9a8] hover:bg-[#b39ddb] text-white font-semibold rounded-full px-8 py-3 shadow-md transition"
        >
          Start Learning
        </Link>
      </div>
    </div>
  );
}
