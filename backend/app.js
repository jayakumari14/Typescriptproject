import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
// const userModel = require("./models/userModel");
import User from "./models/userModel.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("welcome to web page");
});

app.get("/home", (req, res) => {
  res.send("welcome to web home page");
});

app.post("/create-user", async (req, res) => {
  try {
    const { userName, password } = req.body; // Extract data from request body

    // Create a new user with the provided data
    const user = new User({
      userName,
      password,
    });

    // Save the user to the database
    await user.save();

    // Respond with the created user
    res.status(201).json(user);
  } catch (error) {
    // Handle any errors
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
