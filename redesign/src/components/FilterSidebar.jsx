import { useState, useEffect } from "react";

export function FilterSidebar({ filters, onChange }) {
  const [category, setCategory] = useState(filters?.category || "");
  const [meetingType, setMeetingType] = useState(
    filters?.meetingLocation || "All"
  );
  const [population, setPopulation] = useState(
    filters?.classSize === "One-on-One" ? "Individual" : "Group"
  );

  useEffect(() => {
    onChange?.({ category, meetingType, population });
  }, [category, meetingType, population]);

  useEffect(() => {
    setCategory(filters.category);
    setMeetingType(
      filters.meetingLocation === "Online" ? "Online" : "In-person"
    );
    setPopulation(filters.classSize === "One-on-One" ? "Individual" : "Group");
  }, [filters]);

  return (
    <aside className="w-full md:w-72 space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <h2 className="font-bold text-xl mb-8">Filters</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border rounded-xl px-3 py-2 text-gray-700"
              placeholder="Select a Category"
            />
          </div>
         
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Meeting Type
            </h3>
            <div className="flex bg-gray-50 p-1 rounded-xl">
              <button
                onClick={() => setMeetingType("All")}
                className={`flex-1 rounded-lg py-2 ${
                  meetingType === "All" ? "bg-white" : ""
                }`}
              >
                All
              </button>
              <button
                onClick={() => setMeetingType("In-person")}
                className={`flex-1 rounded-lg py-2 ${
                  meetingType === "In-person" ? "bg-white" : ""
                }`}
              >
                In-person
              </button>
              <button
                onClick={() => setMeetingType("Online")}
                className={`flex-1 rounded-lg py-2 ${
                  meetingType === "Online" ? "bg-white" : ""
                }`}
              >
                Online
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Population
            </h3>
            <div className="flex bg-gray-50 p-1 rounded-xl">
              <button
                onClick={() => setPopulation("All")}
                className={`flex-1 rounded-lg py-2 ${
                  population === "All" ? "bg-white" : ""
                }`}
              >
                All
              </button>
              <button
                onClick={() => setPopulation("Individual")}
                className={`flex-1 rounded-lg py-2 ${
                  population === "Individual" ? "bg-white" : ""
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setPopulation("Group")}
                className={`flex-1 rounded-lg py-2 ${
                  population === "Group" ? "bg-white" : ""
                }`}
              >
                Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
