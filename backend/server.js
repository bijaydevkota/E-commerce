import express from "express";
import mongoose from "mongoose";

//Configure the server
const app = express();

app.get("/students", (req, res) => {
  res.send("100 students here");
});

app.listen(4000, () => {
  console.log("Server Started at http://localhost:4000");
});
