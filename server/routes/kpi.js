import express from "express";
import KPI from "../models/KPI.js";

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    // Grab data from database
    const kpis = await KPI.find();
    res.status(200).json(kpis);
  } catch {
    res.status(404).json({ message: error.message });
  }
});
export default router;
