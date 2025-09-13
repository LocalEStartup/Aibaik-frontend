import React from "react";

const OrdersTable = () => (
  <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md">
    <h3 className="text-xl font-bold mb-4">Orders</h3>
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-yellow-100">
          <th className="border px-2 py-1">ID</th>
          <th className="border px-2 py-1">User</th>
          <th className="border px-2 py-1">Items</th>
          <th className="border px-2 py-1">Total</th>
          <th className="border px-2 py-1">Location</th>
          <th className="border px-2 py-1">Status</th>
          <th className="border px-2 py-1">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2 py-1 text-center" colSpan="7">
            No orders yet
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default OrdersTable;
