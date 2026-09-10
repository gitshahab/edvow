export interface JobRole {
  id: string;
  title: string;
  department: "IT Services" | "Career Counselling" | "Operations & Growth";
  deployment: "Client Onsite" | "Internal Core";
  location: string;
  experience: string;
  type: string;
  salaryRange?: string;
  overview: string;
  skills: string[];
}

export const JOBS_DATA: JobRole[] = [
  {
    id: "bda-job-post",
    title: "Business Development Associate",
    department: "Career Counselling",
    deployment: "Internal Core",
    location: "Remote PAN India",
    experience: "Fresher",
    type: "Full-Time (Edvow Payroll)",
    salaryRange: "Competitive / Tier-1 Standard",
    overview:
      "We are looking for energetic, self-motivated fresher’s who are eager to learn, communicate, and drive admissions/sales. You don't need prior experience—we will train you on the job. If you have grit, excellent communication skills, and a desire to control your own income, this role is for you.",
    skills: [
      "Fleunt English",
      "Good Communication Skill",
      "Problem Soving",
      "Decision Making",
      "Counselling",
    ],
  },
];
