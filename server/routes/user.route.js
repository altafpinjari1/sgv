import express from "express";
import student from "../controllers/student.controller.js";

const router = express.Router();

router.route("/onlineAdmission").post(student);

export default router;