import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const PORT = 4000;
const app = express();

app.use(cors);
app.use(express.json());

mongoose
  .connect(
    "mongodb://localhost:27017/accounts")
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("listening on port" + " " + PORT);
});
