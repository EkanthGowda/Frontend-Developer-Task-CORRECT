// taskRoutes.js
const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const c = require("../controllers/taskController");
router.get("/", auth, c.getTasks);
router.post("/", auth, c.createTask);
router.put("/:id", auth, c.updateTask);
router.delete("/:id", auth, c.deleteTask);
module.exports = router;
