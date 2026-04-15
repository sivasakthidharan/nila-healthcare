import { Request, Response } from "express";
import  pool  from "../db";

export const getExperts = async (req: Request, res: Response) => {
     //console.log("getExperts function called"); // Add this line
  try {
        console.log("🔥 DB QUERY START");

    const result = await pool.query("SELECT * FROM experts ORDER BY id ASC");
     // console.log("Query result:", result.rows); // Add this line
     console.log("✅ DATA:", result.rows);

    res.json(result.rows);
  } catch (error :any ) {
    console.error(error);
    console.error("❌ DB ERROR FULL:", error); 
    res.status(500).json({ message: "Server error", error: error.message  });
  }
};


export const deleteExpert = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM experts WHERE id = $1", [id]);

    if (result.rowCount === 0) {
      res.status(404).json({ message: "Expert not found" });
      return;
    }
    res.json({ message: "Expert deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Failed to delete expert" });
  }
};