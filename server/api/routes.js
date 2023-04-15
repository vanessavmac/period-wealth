import express from "express";
import user from "./users/routes.js";

const router = express.Router();

router.use('/users', user);

export default router;