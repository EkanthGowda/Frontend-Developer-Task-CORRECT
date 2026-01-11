import React, { useState } from "react";
import api from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      window.location = "/dashboard";
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 transition-transform duration-300 hover:scale-[1.02]">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to continue to your dashboard
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-1">
            Email address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg outline-none
                       transition-all duration-300
                       focus:ring-2 focus:ring-indigo-500
                       focus:border-indigo-500"
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
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg outline-none
                       transition-all duration-300
                       focus:ring-2 focus:ring-indigo-500
                       focus:border-indigo-500"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2 animate-pulse">
            {error}
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
              : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg active:scale-95"
            }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Register link */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-indigo-600 font-medium hover:underline transition-colors"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
