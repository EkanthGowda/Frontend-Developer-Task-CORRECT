import React, { useState } from "react";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!form.name || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      await api.post("/auth/register", form);
      setSuccess("Registration successful. Redirecting to login...");
      setError("");

      setTimeout(() => {
        window.location = "/";
      }, 1500);
    } catch {
      setError("User already exists or invalid data");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 transition-transform duration-300 hover:scale-[1.02]">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Register to get started
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg outline-none
                       transition-all duration-300
                       focus:ring-2 focus:ring-green-500
                       focus:border-green-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg outline-none
                       transition-all duration-300
                       focus:ring-2 focus:ring-green-500
                       focus:border-green-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            className="w-full px-4 py-2 border rounded-lg outline-none
                       transition-all duration-300
                       focus:ring-2 focus:ring-green-500
                       focus:border-green-500"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2 animate-pulse">
            {error}
          </div>
        )}

        {/* Success */}
        {success && (
          <div className="mb-4 text-sm text-green-600 bg-green-50 border border-green-200 rounded-md px-3 py-2">
            {success}
          </div>
        )}

        {/* Button */}
        <button
          onClick={submit}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-white font-semibold
            transition-all duration-300
            ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 hover:shadow-lg active:scale-95"
            }`}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {/* Login link */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/"
            className="text-green-600 font-medium hover:underline transition-colors"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
