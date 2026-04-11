 //import express from "express";
 //import expertRoutes from "./routes/experts.routes";
// import expertRoutes from "./routes/expert.routes";
// // import cors from 'cors';
// // import { errorMiddleware } from './middlewares/error.middleware';

// // Import routes
// // import authRoutes from './modules/auth/auth.routes';
// // import usersRoutes from './modules/users/users.routes';
// // import expertsRoutes from './modules/experts/experts.routes';
// // import appointmentsRoutes from './modules/appointments/appointments.routes';
// // import paymentsRoutes from './modules/payments/payments.routes';
// // import notificationsRoutes from './modules/notifications/notifications.routes';

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// // app.use(cors()); // Configure CORS for your frontend domains

// // Health check
// app.get("/health", (req, res) => {
//   res.json({ status: "ok", message: "Nila Backend API is running" });
// });


// app.use("/api/experts", expertRoutes);
// app.use("/uploads", express.static("uploads"));
// // API Routes
// // TODO: Uncomment these as you implement each module
// // app.use('/api/auth', authRoutes);
// // app.use('/api/users', usersRoutes);
// // app.use('/api/experts', expertsRoutes);
// // app.use('/api/appointments', appointmentsRoutes);
// // app.use('/api/payments', paymentsRoutes);
// // app.use('/api/notifications', notificationsRoutes);

// // Error handling middleware (should be last)
// // app.use(errorMiddleware);

// export default app;


import express from "express";
import expertRoutes from "./routes/expert.routes"; 

 
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req, res) => {
  res.json({ status: "ok", message: "Nila Backend API is running" });
});

app.use("/api/experts", expertRoutes); 
app.use("/uploads", express.static("uploads"));


export default app;