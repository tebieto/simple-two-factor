export class OTP {
  otps: { otp: string; time: number; phoneNumber: string }[] = [];

  sendOTP(phoneNumber: string) {
    console.log(`sending OTP to ${phoneNumber}`);
  }
  generateOTP(phoneNumber: string) {
    var digits = "0123456789";
    let otp = "";
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    this.otps.push({ otp, time: new Date().getTime(), phoneNumber });
    return otp;
  }
  isValidOTP(sentOtp: string, sentPhoneNumber: string) {
    const expirationInMiliSeconds = 60000;
    console.log(this.otps);
    return !!this.otps.find(({ otp, phoneNumber, time }) => {
      const expired = new Date().getTime() - time > expirationInMiliSeconds;
      return otp === sentOtp && phoneNumber === sentPhoneNumber && !expired;
    });
  }
}
