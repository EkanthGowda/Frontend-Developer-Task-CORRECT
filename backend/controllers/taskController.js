const Task = require("../models/Task");

exports.getTasks = async (req, res) => {
  const { search } = req.query;

  const query = {
    userId: req.userId,
    ...(search && { title: { $regex: search, $options: "i" } })
  };

  res.json(await Task.find(query));
};

exports.createTask = async (req, res) => {
  if (!req.body.title)
    return res.status(400).json({ message: "Title required" });

  const task = await Task.create({
    title: req.body.title,
    userId: req.userId
  });

  res.status(201).json(task);
};

exports.updateTask = async (req, res) => {
  const updated = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );

  res.json(updated);
};

exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({
    _id: req.params.id,
    userId: req.userId
  });

  res.json({ message: "Task deleted" });
};
