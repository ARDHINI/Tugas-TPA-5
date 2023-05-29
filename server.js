import express from "express";
import { config } from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import todos from "./routes/todos.js";
import users from "./routes/users.js";
import auth from "./middleware/auth.js";

config();
const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use("/todo", auth, todos);
app.use("/users", users);
app.get("/", (req, res) => res.send("Hello kamu berhasil jalankan endpoint ini"));
app.all("*", (req, res) =>
  res.send("Maaf, route yang ada tuju tidak ada")
);

app.listen(port, () => console.log(`Server Berjalan di port ${port}`));
