import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MenuControl from "./MenuControl";
import OrdersTable from "./OrdersTable";
import ReservationsTable from "./ReservationsTable";
import UsersTable from "./UsersTable";
import ChefControl from "./ChefControl";

const AdminDashboard = () => {
  const tabs = ["menu", "orders", "reservations", "users", "chef"];
  const [activeTab, setActiveTab] = useState("menu");

  // Shared state for demo
  const [menuItems, setMenuItems] = useState([]);
  const [chefs, setChefs] = useState([]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-8 space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-600">
          Control menu & tables, and view orders/users. (Client-side demo)
        </p>

        {activeTab === "menu" && (
          <MenuControl menuItems={menuItems} setMenuItems={setMenuItems} />
        )}
        {activeTab === "orders" && <OrdersTable />}
        {activeTab === "reservations" && <ReservationsTable />}
        {activeTab === "users" && <UsersTable />}
        {activeTab === "chef" && <ChefControl chefs={chefs} setChefs={setChefs} />}
      </main>
    </div>
  );
};

export default AdminDashboard;
