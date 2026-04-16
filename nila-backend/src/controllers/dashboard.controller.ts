import { Request, Response } from "express";
import  pool  from "../db";

// export const getDashboardStats = async (req: Request, res: Response) => {
//   try {
//         console.log("🔥 Dashboard stats API called")

//     const totalUsers = await pool.query("SELECT COUNT(*) FROM users");
//     const totalExperts = await pool.query("SELECT COUNT(*) FROM experts");

  

//     const todayAppointments = await pool.query(`
//       SELECT COUNT(*) FROM appointments
//       WHERE appointment_date = CURRENT_DATE
//     `);

//     const totalRevenue = await pool.query(`
//       SELECT COALESCE(SUM(amount),0) AS revenue FROM payments
//     `);

//     res.json({
//       totalUsers: totalUsers.rows[0].count,
//       totalExperts: totalExperts.rows[0].count,
//       todayAppointments: todayAppointments.rows[0].count,
//      // revenue: totalRevenue.rows[0].coalesce
//       revenue: totalRevenue.rows[0].revenue
//     });

//   } catch (error) {
//     console.error("Dashboard error:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

export const getDashboardStats = async (req: Request, res: Response) => {
  try {
    console.log("🔥 Dashboard stats API called");

    const totalUsers = await pool.query("SELECT COUNT(*) FROM users");
    const totalExperts = await pool.query("SELECT COUNT(*) FROM experts");

    let todayAppointments = { rows: [{ count: 0 }] };
    let totalRevenue = { rows: [{ revenue: 0 }] };

    try {
      todayAppointments = await pool.query(`
        SELECT COUNT(*) FROM appointments
        WHERE appointment_date = CURRENT_DATE
      `);
    } catch (err) {
      console.error("⚠ appointments table missing");
    }

    try {
      totalRevenue = await pool.query(`
        SELECT COALESCE(SUM(amount),0) AS revenue FROM payments
      `);
    } catch (err) {
      console.error("⚠ payments table missing");
    }

    res.json({
      totalUsers: totalUsers.rows[0].count,
      totalExperts: totalExperts.rows[0].count,
      todayAppointments: todayAppointments.rows[0].count,
      revenue: totalRevenue.rows[0].revenue,
    });

  } catch (error: any) {
    console.error("❌ Dashboard error FULL:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getUpcomingAppointments = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT 
        id,
        patient_name AS "patientName",
        therapist_name AS "therapistName",
        type,
        status,
        TO_CHAR(appointment_time, 'HH12:MI AM') AS "time",
        appointment_date AS "date"
      FROM clinic_appointments
      WHERE appointment_date >= CURRENT_DATE
      ORDER BY appointment_date, appointment_time
      LIMIT 5
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching upcoming:", error);
    //res.status(500).json({ message: "Server error" });
    res.json([]); 
  }
};


export const getExpertAvailability = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT 
        id,
        name AS "expertName",
        specialization,
         next_available AS "nextAvailable",
        status
        FROM experts
      LIMIT 5
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("❌ Availability error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAppointmentsOverview = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`
      SELECT 
        appointment_date AS "date",
        COUNT(*) AS "count"
      FROM clinic_appointments
      WHERE appointment_date >= CURRENT_DATE - INTERVAL '6 days'
      GROUP BY appointment_date
      ORDER BY appointment_date
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    //res.status(500).json({ message: "Server error" });
    res.json([]); 
  }
};