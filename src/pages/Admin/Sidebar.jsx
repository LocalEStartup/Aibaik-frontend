import React from "react";

const Sidebar = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 bg-white border-r-2 border-yellow-400 p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-red-500 mb-6">Admin</h2>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-left py-2 px-4 rounded-lg font-semibold hover:bg-yellow-100 transition ${
            activeTab === tab ? "bg-yellow-400 text-white" : "text-gray-700"
          }`}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)} Control
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
