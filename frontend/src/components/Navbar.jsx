import React from "react";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/";
  };

  return (
    <div className="flex justify-between p-4 bg-gray-800 text-white">
      <h1>Dashboard</h1>
      <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
        Logout
      </button>
    </div>
  );
}
