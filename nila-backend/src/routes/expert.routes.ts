import { Router } from "express";
import { getExperts, deleteExpert } from "../controllers/expert.controller";
// import { getExperts } from "../controllers/expert.controller";
import pool from "../db";

import multer from "multer";

console.log("✅ expert.routes loaded");

// ✅ Add here (below imports)
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

export const upload = multer({ storage });

const router = Router();

router.delete("/:id", deleteExpert);

router.get("/", getExperts);
// router.get("/", (req, res) => {
//   console.log("Experts route hit");
//   res.send("Experts working");
// });

router.post("/",  upload.single("avatar"), async (req, res) => {
    console.log("🔥 POST HIT");
  try {
     console.log("Incoming expert:", req.body);
     console.log("File:", req.file);
  
    const filePath = req.file ? req.file.filename : null;
    const { name, title, email, phone, specialty, rating, patients, status, joinedDate, nextAvailable } = req.body

    const result = await pool.query(
      `INSERT INTO experts (name,title,email,phone,specialization,rating,patients,status,joined_date, next_available, avatar)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10, $11)
       RETURNING *`,
      [name, title, email, phone, specialty, rating , patients, status || "active" , joinedDate  ? new Date(joinedDate) : null, nextAvailable  ? new Date(nextAvailable) : null, filePath  ]
    )

    res.json(result.rows[0]);

  } catch (err:any) {
    console.error("INSERT ERROR Full:", err);
    res.status(500).json({ error: err.message })
  }
})

export default router;
