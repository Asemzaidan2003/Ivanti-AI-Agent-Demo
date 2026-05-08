import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRout from "./backend/routs/user.rout.js";
import incidentRout from "./backend/routs/incident.rout.js"
import ServiceRequestRout from "./backend/routs/SR.rout.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: process.env.Front_End_URL,
    credentials: true,
  }),
);


// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

app.listen(port, async () => {
  console.log(`Server started at port ${port}`);
});

app.use("/api/user",userRout)
app.use("/api/incident",incidentRout)
app.use("/api/sr",ServiceRequestRout)