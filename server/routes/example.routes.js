//dependencies
import express from "express";
//external dependecies
import { example } from "../controllers/example.controllers";
//router
const router = express.Router();

router.get("/my-custom-route", example);

export default router;
