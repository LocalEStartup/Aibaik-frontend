import React from "react";

const aboutCards = [
  {
    title: "Vision",
    description: "To delight every guest with exquisite flavors, joyful experiences, and a warm ambiance that feels like home.",
  },
  {
    title: "Colors & Ambiance",
    description: "A vibrant palette of White, Yellow & Red combined with subtle animations creates a lively, welcoming atmosphere.",
  },
  {
    title: "Contact",
    description: "Email: hello@aibaik.demo\nPhone: 08940076767",
  },
];

const About = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">About AIBAIK</h2>
        <p className="text-gray-700 mb-8 text-center">
          AIBAIK in Sivakasi is a trailblazer in Arabian & Asian cuisine, offering a unique menu curated with passion and precision. Independently owned and operated, AIBAIK provides a memorable dining experience with flavors that blend tradition and innovation. Known as "Tamil Nadu's Fastest Growing Arabian & Asian Restaurant," the restaurant emphasizes quality, creativity, and guest satisfaction, separate from any other franchises.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {aboutCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md hover:translate-y-1 transition-transform duration-200"
            >
              <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              <p className="text-gray-700 whitespace-pre-line">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
