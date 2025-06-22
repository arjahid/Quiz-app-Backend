const express = require("express");
const router = express.Router();
const Result = require("../models/Result");

// POST: Save quiz result
router.post("/", async (req, res) => {
  try {
    const { user, score, total } = req.body;
    const result = new Result({ user, score, total });
    await result.save();
    res.status(201).json({ message: "Result saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save result" });
  }
});

// GET: View all results
router.get("/", async (req, res) => {
  try {
    const results = await Result.find().sort({ date: -1 });
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch results" });
  }
});
// DELETE: Delete a result by ID
router.delete("/:id", async (req, res) => {
  try {
    await Result.findByIdAndDelete(req.params.id);
    res.json({ message: "Result deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete result" });
  }
});


module.exports = router;
