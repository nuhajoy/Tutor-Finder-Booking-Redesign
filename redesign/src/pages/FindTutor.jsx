import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { tutors } from "../data/tutors";
import Header  from "../components/Header";
import { ToggleFilters } from "../components/ToggleFilters";
import { FilterSidebar } from "../components/FilterSidebar";
import { TutorCard } from "../components/TutorCard";
import Footer from "../components/Footer";

export default function FindTutor() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({});
  const [available, setAvailable] = useState(false);
  const [free, setFree] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [sort, setSort] = useState("Highest Rated");

  const onView = (tutor) => navigate(`/tutor/${tutor.id}`);
  const onBook = (tutor) => navigate(`/booking/${tutor.id}`);

  const filteredTutors = useMemo(() => {
    let list = [...tutors];
    if (available) list = list.filter((t) => t.nextAvailable.includes("Today"));
    if (free) list = list.filter((t) => t.freeMeeting);
    if (discount) list = list.filter((t) => t.discount);
    if (sort === "Highest Rated") list.sort((a, b) => b.rating - a.rating);
    if (sort === "Price: Low to High")
      list.sort((a, b) => a.hourlyRate - b.hourlyRate);
    if (sort === "Price: High to Low")
      list.sort((a, b) => b.hourlyRate - a.hourlyRate);
    return list;
  }, [available, free, discount, sort]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-6 pt-8 pb-20">
        <ToggleFilters
          available={available}
          free={free}
          discount={discount}
          sort={sort}
          onToggle={(key, value) => {
            if (key === "available") setAvailable(value);
            if (key === "free") setFree(value);
            if (key === "discount") setDiscount(value);
          }}
          onSort={setSort}
        />

        <div className="flex flex-col lg:flex-row gap-10">
          <FilterSidebar filters={filters} onChange={setFilters} />
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Top Tutors
              </h1>
              <p className="text-gray-600">
                {filteredTutors.length} tutors available
              </p>
            </div>
            <div className="space-y-8">
              {filteredTutors.map((tutor) => (
                <TutorCard
                  key={tutor.id}
                  tutor={tutor}
                  onView={onView}
                  onBook={onBook}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
