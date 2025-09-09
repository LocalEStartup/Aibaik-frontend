import React from "react";

const chefs = [
  {
    role: "Chef",
    name: "Chef Arjun Menon",
    qualification: "B.Sc. Culinary Arts, Le Cordon Rouge",
    experience: "12+ years across Chennai, Kochi & Bengaluru.",
    signature: "Pepper Chicken Soup • Lemon Pepper Fish • Idli 2.0",
  },
  {
    role: "Sous",
    name: "Sous Chef Priya",
    qualification: "Diploma in Patisserie",
    specialties: "Desserts, breads, & plated art.",
  },
];

const ChefSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Master Chef</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {chefs.map((chef, idx) => (
            <div
              key={idx}
              className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md hover:translate-y-1 transition-transform duration-200"
            >
              <div className="h-36 w-full rounded-xl bg-gradient-to-br from-yellow-200 to-red-200 flex items-center justify-center text-2xl font-bold text-red-800 mb-4">
                {chef.role}
              </div>
              <h3 className="text-xl font-bold mb-2">{chef.name}</h3>
              {chef.qualification && <p className="mb-1">Qualification: {chef.qualification}</p>}
              {chef.experience && <p className="mb-1">Experience: {chef.experience}</p>}
              {chef.signature && <p className="mb-1">Signature: {chef.signature}</p>}
              {chef.specialties && <p className="mb-1">Specialties: {chef.specialties}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
