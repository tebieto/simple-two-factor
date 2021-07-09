import express from "express";
import { authenticateUser, validateOTP } from "../services/authenticate";
/**
 * Router Definition
 */
export const router = express.Router();

router.post("/authenticate", authenticateUser);

router.post("/validate", validateOTP);
