import React from "react";

const ReservationsTable = () => (
  <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 shadow-md">
    <h3 className="text-xl font-bold mb-4">Reservations</h3>
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-yellow-100">
          <th className="border px-2 py-1">ID</th>
          <th className="border px-2 py-1">User</th>
          <th className="border px-2 py-1">Date</th>
          <th className="border px-2 py-1">Seats</th>
          <th className="border px-2 py-1">Type</th>
          <th className="border px-2 py-1">Payment</th>
          <th className="border px-2 py-1">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-2 py-1 text-center" colSpan="7">
            No reservations yet
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ReservationsTable;
