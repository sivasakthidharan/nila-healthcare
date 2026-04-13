
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