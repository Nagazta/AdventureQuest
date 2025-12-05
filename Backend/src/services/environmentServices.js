// environmentServices.js or your controller
const express = require("express");
const router = express.Router();
const pool = require("./db"); // your pg Pool

router.post("/initialize", async (req, res) => {
  const { studentId, environmentType } = req.body;
  console.log("Inserting environment_state with:", { studentId, environmentType });

  console.log("Initialize request payload:", { studentId, environmentType });

  if (!studentId) return res.status(400).json({ success: false, error: "Missing studentId" });

  try {
    const studentResult = await pool.query(
      "SELECT * FROM student WHERE student_id = $1",
      [studentId]
    );

    if (!studentResult.rows.length)
      return res.status(400).json({ success: false, error: `Student ${studentId} not found` });

    const envResult = await pool.query(
      "SELECT * FROM environment_state WHERE student_id = $1",
      [studentId]
    );

    if (envResult.rows.length)
      return res.json({ success: true, message: "Environment already initialized", data: envResult.rows[0] });

    const insertResult = await pool.query(
      `INSERT INTO environment_state (student_id, environment_type, created_at)
       VALUES ($1, $2, NOW()) RETURNING *`,
      [studentId, environmentType]
    );

    console.log("Environment inserted:", insertResult.rows[0]);

    res.json({ success: true, message: "Environment initialized successfully", data: insertResult.rows[0] });

  } catch (err) {
    console.error("Error initializing environment:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});