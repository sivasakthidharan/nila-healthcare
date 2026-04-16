import pool from "../db";

export const logActivity = async (action: string) => {
  try {
    await pool.query(
      "INSERT INTO activity_logs (action) VALUES ($1)",
      [action]
    );
  } catch (error) {
    console.error("❌ Activity log error:", error);
  }
};