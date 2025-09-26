import express from "express";
import taskRoute from "./routes/taskRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

//middleware to parse json
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/api/tasks", taskRoute);

// kêt noi db thi moi chay server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server port 5001 ${PORT}`);
  });
});
