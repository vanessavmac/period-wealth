import express from "express";
import users from "./users/routes.js";
import locations from "./locations/routes.js"

const router = express.Router();

router.use('/users', users);
router.use('/locations', locations)

export default router;