import React from "react";

const menuItems = [
  { title: "Vegetarian", img: "/idli1.jpg", link: "/veg" },
  { title: "Non‑Vegetarian", img: "/nonveg.jpg", link: "/nonveg" },
  { title: "Seafood", img: "/seafood.jpg", link: "/seafood" },
  { title: "Soups", img: "/soup.jpg", link: "/soups" },
  { title: "Main Course", img: "/maincourse.jpg", link: "/maincourse" },
  { title: "Noodles", img: "/noodles.jpg", link: "/noodles" },
  { title: "Salads", img: "/salad.jpg", link: "/salads" },
  { title: "Desserts", img: "/dessert.jpg", link: "/desserts" },
];

const ExploreMenu = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Menu</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block bg-yellow-50 border-2 border-yellow-400 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition"
            >
              <div className="w-full h-40 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="mt-3 text-lg font-semibold px-4">{item.title}</h3>
              <div className="px-4 pb-4 mt-2">
                <span className="inline-block px-4 py-2 bg-gray-100 rounded-lg text-sm hover:bg-gray-200 transition">
                  View Details
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMenu;
