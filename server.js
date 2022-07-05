import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import routes from "./routes/index.js"
import dotenv from 'dotenv';

dotenv.config();

const { MONGODB_URL } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const URI = process.env.MONGODB_URL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server is running on port", port));
