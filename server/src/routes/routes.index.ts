import express from "express";
import { authenticateUser } from "../services/authenticate";
/**
 * Router Definition
 */
export const router = express.Router();

router.post("/authenticate", authenticateUser);
