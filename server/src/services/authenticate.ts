import { Request, Response } from "express";
import { OTP } from "./otp";

const otpService = new OTP();

export const authenticateUser = (req: Request, res: Response) => {
  const { phoneNumber } = req.body;
  res.json({ otp: otpService.generateOTP(phoneNumber), phoneNumber });
};

export const validateOTP = (req: Request, res: Response) => {
  const { phoneNumber, otp } = req.body;
  console.log(req.body);
  res.json({ valid: otpService.isValidOTP(otp, phoneNumber) });
};
