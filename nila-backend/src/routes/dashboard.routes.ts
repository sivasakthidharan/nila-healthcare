import { Router } from "express";
import { getDashboardStats } from "../controllers/dashboard.controller";
import { getUpcomingAppointments, getExpertAvailability, getAppointmentsOverview } from "../controllers/dashboard.controller";
import pool from "../db";

const router = Router();

router.get("/stats", getDashboardStats);
router.get("/upcoming", getUpcomingAppointments);
router.get("/availability", getExpertAvailability);
router.get("/overview", getAppointmentsOverview);

router.get("/activity", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        id,
        action,
        TO_CHAR(created_at, 'DD Mon YYYY, HH12:MI AM') AS time
      FROM activity_logs
      ORDER BY created_at DESC
      LIMIT 10
    `);

    // const result = await pool.query(
    //   "SELECT * FROM activity_logs ORDER BY created_at DESC LIMIT 10"
    // );

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching activity logs:", error);
    //res.status(500).json({ message: "Server error" });
    res.json([]); 
  }
});

export default router;