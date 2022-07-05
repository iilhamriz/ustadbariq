import express from "express";
const route = express.Router();

import authCtrl from "../controllers/Wilayah.js";

route.get("/", authCtrl.getAll);
route.post("/", authCtrl.create);
route.get("/:idWilayah", authCtrl.getOne);
route.patch("/:idWilayah", authCtrl.update);
route.delete("/:idWilayah", authCtrl.delete);

export default route;

"http://localhost:5000/wilayah"
"http://localhost:5000/wilayah/:id"