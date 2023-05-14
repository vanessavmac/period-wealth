import express from "express";
import controller from "./controller.js"

const router = express.Router();

router.get("/getAll", controller.getAll);
router.get("/getLocation", controller.getLocation);

export default router;
