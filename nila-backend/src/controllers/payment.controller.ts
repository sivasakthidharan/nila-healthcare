import { Request, Response } from "express";
import crypto from "crypto";
import pool from "../db";

const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// export const createOrder = async (req: Request, res: Response) => {
//   try {
//      console.log("ENV CHECK:", process.env.RAZORPAY_KEY_ID);
//      const { patientName, patientId } = req.body;

//       //  FIXED amount (avoid frontend tampering)
//      const amount = 50;
//        //  Validation
//     if (!patientName || !patientId) {
//          return res.status(400).json({ message: "Missing required fields" });
//         }

//          // Create Razorpay order
//     const order = await razorpay.orders.create({
//       amount: amount * 100,
//       currency: "INR",
//       receipt: "receipt_" + Date.now(),
//       notes: {
//         patientName,
//         patientId,
//       },
//     });

//     res.json(order);
//   } catch (error) {
//     console.error("CREATE ORDER ERROR:", error);
//     res.status(500).json({ message: "Error creating order" });
//   }
// };

export const createOrder = async (req: Request, res: Response) => {
  try {
        console.log("CREATE ORDER BODY:", req.body);

    const { amount, patientName, patientId } = req.body;   // amount is in paise

    if (!amount || !patientName || !patientId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const order = await razorpay.orders.create({
      amount: Number(amount),          // already in paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
      notes: { patientName, patientId },
    });

    res.json(order);
  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);
    res.status(500).json({ message: "Error creating order" });
  }
};


export const cashPayment = async (req: Request, res: Response) => {
  try {
    console.log("Cash payment request body:", req.body);
    const { patientName, patientId, amount } = req.body;

    // Validation
    if (!patientName || !patientId || amount === undefined || amount === null) {
      return res.status(400).json({ 
        message: "Missing required fields: patientName, patientId, amount" 
      });
    }

    // Ensure amount is a number (could be sent as string)
    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) {
      return res.status(400).json({ message: "Amount must be a valid number" });
    }

    console.log(`Processing cash payment for ${patientName} (${patientId}) of ₹${numericAmount}`);

    // Insert payment record – use SUCCESS status because cash is considered paid on booking
    const query = `
      INSERT INTO payments 
        (patient_name, patient_id, amount, payment_id, order_id, status, payment_method, created_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
      RETURNING id
    `;
    
    const values = [
      patientName,
      patientId,
      numericAmount,
      null,               // payment_id
      null,               // order_id
      "SUCCESS",          // status (cash = immediate success)
      "CASH"
    ];

    const result = await pool.query(query, values);
    
    console.log(`Cash payment recorded with id ${result.rows[0].id}`);
    res.json({ success: true, paymentId: result.rows[0].id });

  } catch (error: any) {
    console.error("CASH PAYMENT ERROR DETAILS:", error);
    // Send a meaningful error response
    res.status(500).json({ 
      message: "Cash payment failed",
      error: error.message,
      detail: error.code // PostgreSQL error code if any
    });
  }
};

// export const cashPayment = async (req: Request, res: Response) => {
//   try {
//     console.log("BODY:", req.body); 
//     const { patientName, patientId, amount } = req.body;

//     if (!patientName || !patientId || !amount) {
//       return res.status(400).json({ message: "Missing fields" });
//     }

//     console.log("Cash payment for:", patientName, patientId);

//     // Save in DB
//     await pool.query(
//       `INSERT INTO payments 
//        (patient_name, patient_id, amount, payment_id, order_id, status, payment_method)
//        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
//       [
//         patientName,
//         patientId,
//         amount,
//         null,   // no payment id
//         null,   // no order id
//         "PENDING",
//         "CASH"
//       ]
//     );

//     res.json({ success: true });

//   } catch (error) {
//     console.error("CASH PAYMENT ERROR:", error);
//     res.status(500).json({ message: "Cash payment failed" });
//   }
// };

export const verifyPayment = async (req: Request, res: Response) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      patientName,
      patientId,
    } = req.body;

    const amount = 200; // 🔒 keep consistent

    const sign = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(sign)
      .digest("hex");

      console.log("SIGN CHECK:", expectedSign, razorpay_signature);

    if (expectedSign === razorpay_signature) {

        console.log("Payment verified for:", patientName, patientId); 

      // Save to DB
        await pool.query(
    `INSERT INTO payments 
     (patient_name, patient_id, amount, payment_id, order_id, status, payment_method)
     VALUES ($1, $2, $3, $4, $5, $6,  $7)`,
    [
      patientName,
      patientId,
      amount,
      razorpay_payment_id,
      razorpay_order_id,
      "SUCCESS",
      "RAZORPAY"
    ]
  );
      // TODO: Save to DB
      res.json({ success: true });
    } else {
        console.log("Payment FAILED for:", patientName, patientId);
      res.json({ success: false });
    }
  } catch (error) {
    console.error("VERIFY PAYMENT ERROR:", error);
    res.status(500).json({ message: "Verification failed" });
  }
};