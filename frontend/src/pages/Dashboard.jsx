import React, { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [profile, setProfile] = useState({});
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api.get("/user/profile").then((r) => setProfile(r.data));
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    const res = await api.get("/tasks", { params: { search } });
    setTasks(res.data);
    setLoading(false);
  };

  const addTask = async () => {
    if (!title.trim()) return;
    await api.post("/tasks", { title });
    setTitle("");
    loadTasks();
  };

  const delTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 p-6">
        {/* Profile Header */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome, {profile.name}
            </h2>
            <p className="text-gray-500 mt-1">
              Manage your tasks efficiently
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">
          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              placeholder="Search tasks..."
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg outline-none
                         transition-all duration-300
                         focus:ring-2 focus:ring-indigo-500
                         focus:border-indigo-500"
            />
            <button
              onClick={loadTasks}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg
                         transition-all duration-300
                         hover:bg-indigo-700 hover:shadow-lg active:scale-95"
            >
              Search
            </button>
          </div>

          {/* Add Task */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              placeholder="New task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg outline-none
                         transition-all duration-300
                         focus:ring-2 focus:ring-green-500
                         focus:border-green-500"
            />
            <button
              onClick={addTask}
              className="px-6 py-2 bg-green-600 text-white rounded-lg
                         transition-all duration-300
                         hover:bg-green-700 hover:shadow-lg active:scale-95"
            >
              Add Task
            </button>
          </div>

          {/* Task List */}
          {loading ? (
            <p className="text-center text-gray-500">Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks found. Add one to get started 🚀
            </p>
          ) : (
            <ul className="space-y-3">
              {tasks.map((t) => (
                <li
                  key={t._id}
                  className="flex justify-between items-center
                             bg-gray-50 border rounded-lg px-4 py-3
                             transition-all duration-300
                             hover:shadow-md hover:bg-white"
                >
                  <span className="text-gray-800">{t.title}</span>
                  <button
                    onClick={() => delTask(t._id)}
                    className="text-red-500 font-medium
                               transition-all duration-300
                               hover:text-red-700 hover:scale-110"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
