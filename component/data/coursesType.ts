export interface Course {
  name: string;
  fullForm: string;
  duration: string;
  specializations: string[];
  entranceExams: string[];
  topColleges: string[];
  careerOptions: string[];
  avgStartingSalary: string;
}


export interface Category {
  category: string;
  courses: Course[];
}


export interface Level {
  level: string;
  duration_note: string;
  categories: Category[];
}


export interface Stream {
  streamId: string;
  stream: string;
  icon: string;
  description: string;
  backgrounds: string[];
  levels: Level[];
}


export type CoursesData = Stream[];