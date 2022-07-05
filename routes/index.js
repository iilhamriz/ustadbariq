// * Import Router from express
import express from "express";
import Wilayah from "./Wilayah.js";
// import generateCollageTime from "@controllers/CollageTime/post.generate"

const route = express.Router();

// ====== authorized area ======
route.use("/wilayah", Wilayah);


// ! If not API available
// route.use((_, res) => {
//   res.status(404).json({
//     success: 0,
//     message: "API not found.",
//   });
// });

export default route;
