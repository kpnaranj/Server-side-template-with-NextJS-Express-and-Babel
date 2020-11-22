//dependencies
import express from "express";
//external dependecies
import { getExample, postExample } from "../controllers/example.controllers";
//router
const router = express.Router();

router.get("/example", getExample);
router.post("/example", postExample);

export default router;
