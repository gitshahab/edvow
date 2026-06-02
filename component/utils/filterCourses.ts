import { CoursesData } from "../data/coursesType";

export function filterCoursesData(data: CoursesData, searchTerm: string): CoursesData {
  if (!searchTerm.trim()) return data;
  
  const query = searchTerm.toLowerCase().trim();

  return data
    .map((stream) => {
      // filter at stream
      const filteredLevels = stream.levels
        .map((level) => {
          // filter at categories
          const filteredCategories = level.categories
            .map((cat) => {
              // filter the courses that match the search term
              const filteredCourses = cat.courses.filter((course) => 
                course.name.toLowerCase().includes(query) ||
                course.fullForm.toLowerCase().includes(query) ||
                course.specializations.some(s => s.toLowerCase().includes(query)) ||
                course.careerOptions.some(c => c.toLowerCase().includes(query))
              );

              return { ...cat, courses: filteredCourses };
            })
            // remove categories that have no matching courses left
            .filter((cat) => cat.courses.length > 0);

          return { ...level, categories: filteredCategories };
        })
        // remove levels that have no matching categories left
        .filter((level) => level.categories.length > 0);

      return { ...stream, levels: filteredLevels };
    })
    // remove streams that have no matching levels left
    .filter((stream) => stream.levels.length > 0);
}