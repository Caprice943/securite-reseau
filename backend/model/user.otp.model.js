const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  otp: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  expiredAt: {
    type: Date,
  },
});

const userOtpVerification = mongoose.model("userOtpVerif", otpSchema);

module.exports = userOtpVerification;
