"use client";

import { courses } from "@/component/data/courses";
import { CoursesData } from "@/component/data/coursesType";
import { useDebounce } from "@/component/hooks/useDebounce";
import { filterCoursesData } from "@/component/utils/filterCourses";
import { useState, useMemo } from "react";

interface CoursesSearchProps {
  initialData: CoursesData;
}

export default function CoursesSearch({ initialData  = courses }: CoursesSearchProps) {
  const [search, setSearch] = useState("");
  
  const debouncedSearch = useDebounce(search, 300);

  //memoize the filtered computation
  const filteredData = useMemo(() => {
    return filterCoursesData(initialData, debouncedSearch);
  }, [debouncedSearch, initialData]);

  return (
    <div className="space-y-8 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12">
      {/* search bar */}
      <div className="max-w-md">
        <label htmlFor="search" className="font-heading text-xs uppercase tracking-widest font-bold text-edvow-blue block mb-2">
          Search Courses & Careers
        </label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="e.g., B.Tech, MBA, Data Science..."
          className="w-full px-4 py-3 border border-slate-200 focus:border-edvow-blue outline-none transition-colors font-sans text-slate-700"
        />
      </div>

      {/* results display */}
      <div className="space-y-12">
        {filteredData?.length === 0 ? (
          <p className="text-slate-400 font-sans italic">No courses found matching &ldquo;{search}&rdquo;</p>
        ) : (
          filteredData?.map((stream) => (
            <div key={stream.streamId} className="border-l-2 border-edvow-orange pl-6 space-y-6">
              <h2 className="font-heading text-2xl font-bold text-edvow-blue uppercase tracking-tight">
                {stream.stream}
              </h2>
              
              {stream.levels?.map((level, lIdx) => (
                <div key={lIdx} className="pl-4 space-y-4">
                  <h3 className="font-heading text-lg font-bold text-slate-700">{level.level}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {level.categories.flatMap(cat => cat.courses).map((course, cIdx) => (
                      <div key={cIdx} className="p-6 border border-slate-100 bg-slate-50/50 hover:border-edvow-blue transition-colors">
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <h4 className="font-heading font-bold text-lg text-edvow-blue">{course.name}</h4>
                            <p className="text-xs text-slate-400 font-sans mt-0.5">{course.fullForm} • {course.duration}</p>
                          </div>
                          <span className="text-xs font-heading font-bold bg-edvow-orange/10 text-edvow-orange px-2 py-1">
                            {course.avgStartingSalary}
                          </span>
                        </div>
                        
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {course.specializations.slice(0, 3).map((spec, sIdx) => (
                            <span key={sIdx} className="text-[10px] uppercase font-sans tracking-wider bg-white border border-slate-200 px-2 py-0.5 text-slate-500">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}