const mentors = [
  {
    name: "Shahab",
    role: "Lead Admissions Strategist",
    expertise: "Storytelling & Personal Branding",
    img: "/Shahab.jpg"
  },
  {
    name: "Arman Husain",
    role: "Global Education Consultant",
    expertise: "University Specialist",
    img: "/AH.jpg"
  },
  {
    name: "Shoaib Akhtar",
    role: "Financial Aid Advisor",
    expertise: "Scholarships & EMI Planning",
    img: "SA.jpg"
  },
  {
    name: "Insha Aziz",
    role: "Lead University Strategist",
    expertise: "University Specialist",
    img: "/IA.jpg"
  },
];

export default function Mentors() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-edvow-blue tracking-tighter mb-4">
              Learn from those who have <span className="text-edvow-orange">been there.</span>
            </h2>
            <p className="font-sans text-slate-600 text-lg">
              Our mentors are more than counselors; they are architects of global careers.
            </p>
          </div>
          <button className="font-heading text-xs uppercase tracking-widest font-bold border-b-2 border-edvow-blue pb-1 hover:text-edvow-orange hover:border-edvow-orange transition-all">
            View All Mentors
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {mentors.map((mentor, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 mb-6">
                <img 
                  src={mentor.img} 
                  alt={mentor.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-edvow-blue">{mentor.name}</h3>
              <p className="font-heading text-xs uppercase tracking-widest text-edvow-orange font-bold mt-1 mb-3">
                {mentor.role}
              </p>
              <p className="font-sans text-sm text-slate-500 border-l border-slate-200 pl-4 italic">
                Specialist in {mentor.expertise}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}