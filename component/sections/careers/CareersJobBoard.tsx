"use client";

import { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Briefcase,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import { JobRole, JOBS_DATA } from "../../data/jobsData";
import { useDebounce } from "../../hooks/useDebounce";

interface CareersJobBoardProps {
  onSelectRole: (role: JobRole) => void;
}

const DEPARTMENTS = [
  "All",
  "IT Services",
  "Career Counselling",
  "Operations & Growth",
] as const;

export default function CareersJobBoard({
  onSelectRole,
}: CareersJobBoardProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [selectedDeployment, setSelectedDeployment] = useState<string>("All");

  const debouncedSearch = useDebounce(searchQuery, 300);

  const filteredJobs = useMemo(() => {
    const q = debouncedSearch.toLowerCase().trim();

    return JOBS_DATA.filter((job) => {
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.overview.toLowerCase().includes(q) ||
        job.skills.some((s) => s.toLowerCase().includes(q)) ||
        job.location.toLowerCase().includes(q);

      const matchesDept =
        selectedDept === "All" || job.department === selectedDept;
      const matchesDeployment =
        selectedDeployment === "All" || job.deployment === selectedDeployment;

      return matchesSearch && matchesDept && matchesDeployment;
    });
  }, [debouncedSearch, selectedDept, selectedDeployment]);

  return (
    <section
      id="open-roles"
      className="py-16 md:py-24 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="font-heading text-xs uppercase tracking-[0.25em] font-bold text-edvow-orange">
            Current Openings
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-edvow-blue">
            Find your next role on Edvow payroll.
          </h2>
          <p className="font-sans text-sm md:text-base text-slate-600 leading-relaxed">
            Filter by domain or deployment model. Every selected candidate
            receives full corporate payroll benefits, direct mentorship, and
            career mobility.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white border border-slate-200 p-4 md:p-6 mb-8 space-y-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input Box */}
            <div className="md:col-span-6 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role title, skill (e.g. Next.js, Admissions), or city..."
                className="w-full pl-10 pr-4 py-3 border border-slate-200 text-sm font-sans focus:border-edvow-blue outline-none transition-colors"
              />
            </div>

            {/* Deployment Filter Dropdown */}
            <div className="md:col-span-3">
              <div className="relative">
                <select
                  value={selectedDeployment}
                  onChange={(e) => setSelectedDeployment(e.target.value)}
                  className="w-full px-3.5 py-3 border border-slate-200 text-xs font-heading font-semibold uppercase tracking-wider text-slate-700 bg-white focus:border-edvow-blue outline-none appearance-none cursor-pointer"
                >
                  <option value="All">All Deployments</option>
                  <option value="Client Onsite">Client Onsite Track</option>
                  <option value="Internal Core">Internal Edvow Core</option>
                </select>
                <SlidersHorizontal className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Results Count Badge */}
            <div className="md:col-span-3 text-right">
              <span className="font-heading text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Showing{" "}
                <strong className="text-edvow-blue">
                  {filteredJobs.length}
                </strong>{" "}
                of {JOBS_DATA.length} Openings
              </span>
            </div>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <span className="text-xs font-heading uppercase tracking-wider text-slate-400 font-bold mr-2">
              Domain:
            </span>
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 text-xs font-heading uppercase tracking-wider font-semibold transition-colors ${
                  selectedDept === dept
                    ? "bg-edvow-blue text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Listing Grid */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white border border-slate-200 p-12 text-center space-y-3">
            <p className="font-heading text-lg font-bold text-slate-700">
              No matching openings found
            </p>
            <p className="font-sans text-xs text-slate-500 max-w-sm mx-auto">
              Try adjusting your search terms or clearing domain filters. You
              can also send an open application below.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedDept("All");
                setSelectedDeployment("All");
              }}
              className="mt-2 text-xs font-heading uppercase tracking-wider text-edvow-orange font-bold hover:underline"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-slate-200/90 p-6 md:p-8 hover:border-edvow-blue transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-6 group"
              >
                {/* Role Details */}
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-heading text-[10px] uppercase tracking-wider font-bold bg-slate-100 text-slate-700 px-2.5 py-1">
                      {job.department}
                    </span>
                    <span className="font-heading text-[10px] uppercase tracking-wider font-bold text-edvow-orange bg-edvow-orange/10 px-2.5 py-1 border border-edvow-orange/20">
                      {job.deployment}
                    </span>
                    <span className="text-xs font-sans text-slate-400">
                      • {job.type}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl md:text-2xl font-bold text-edvow-blue tracking-tight group-hover:text-slate-900 transition-colors">
                    {job.title}
                  </h3>

                  <p className="font-sans text-xs md:text-sm text-slate-600 leading-relaxed">
                    {job.overview}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-sans bg-slate-50 border border-slate-200 px-2 py-0.5 text-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Operational Tags */}
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs font-sans text-slate-500 pt-2">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                {/* Apply Button Action */}
                <div className="lg:text-right shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
                  <button
                    onClick={() => onSelectRole(job)}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-edvow-blue text-white px-7 py-3.5 font-heading text-xs uppercase tracking-widest font-bold hover:bg-slate-900 transition-colors"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                  <p className="text-[10px] text-slate-400 font-sans mt-2">
                    Direct Edvow Payroll
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
