function Switch({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors ${
        checked ? "bg-[#b39ddb]" : "bg-gray-300"
      }`}
    >
      <span
        className={`absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
          checked ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
}

export function ToggleFilters({
  available,
  free,
  discount,
  sort,
  onToggle,
  onSort,
}) {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
      <div className="flex flex-wrap items-center gap-10">
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm font-medium">
            Available For Meetings
          </span>
          <Switch
            checked={available}
            onChange={(v) => onToggle("available", v)}
          />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm font-medium">
            Free Meetings
          </span>
          <Switch checked={free} onChange={(v) => onToggle("free", v)} />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-600 text-sm font-medium">Discounts</span>
          <Switch
            checked={discount}
            onChange={(v) => onToggle("discount", v)}
          />
        </div>
      </div>

      <div className="w-full lg:w-60">
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => onSort(e.target.value)}
            className="w-full appearance-none bg-gray-100 rounded-full px-5 py-2.5 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#b39ddb]/50 cursor-pointer"
          >
            <option>Highest Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
