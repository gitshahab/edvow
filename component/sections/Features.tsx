import Image from "next/image";

const features = [
  {
    question: "Why Global Mobility?",
    answer: "To travel and work globally, communication is key. We bridge the gap to your dream master's degree.",
    img: "/faq1.jpg"
  },
  {
    question: "Financial Stress?",
    answer: "Focus on your future with our No-Cost EMI options. Your education, your terms.",
    img: "/faq2.jpg"
  },
  {
    question: "Hardware Hurdles?",
    answer: "Get a complimentary tablet with your enrollment. We provide the tools; you provide the ambition.",
    img: "/faq3.jpg"
  }
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
      {features.map((item, index) => (
        <div key={index} className="group relative h-[450px] overflow-hidden bg-black">
          {/* Background Image */}
          <Image
            src={item.img} 
            alt={item.question}
            fill
            priority
            className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
            // className="object-cover grayscale-[40%] brightness-75"
          />
          
          {/* Default State, Question */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:translate-y-[-160px] transition-transform duration-500">
              {item.question}
            </h3>
          </div>

          {/* Hover State, Answer */}
          <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-edvow-blue/90 backdrop-blur-sm">
            <p className="font-sans text-lg text-white leading-relaxed mb-6">
              {item.answer}
            </p>
            <button className="w-fit text-edvow-orange font-heading text-xs uppercase tracking-widest font-bold">
              Learn More →
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}