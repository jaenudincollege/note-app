import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import noteRoutes from "./routes/notes.routes.js";
import connectDatabase from "./configs/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/notes", noteRoutes);

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
