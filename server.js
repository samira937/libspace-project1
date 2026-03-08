const express = require("express");
const app = express();

const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Libspace server is running successfully!");
});

app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    message: "User registered successfully",
    user: { name, email }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});const mongoose = require("mongoose");

mongoose.connect("PASTE_YOUR_URL_HERE")
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log(err);
});mongoose.connect("mongodb+srv://samira:12345@cluster0.ekwx9dw.mongodb.net/?appName=Cluster0")