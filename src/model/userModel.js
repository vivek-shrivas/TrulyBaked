import mongoose from "mongoose";
import { type } from "os";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "please enter your Name"],
  },
  email: {
    type: String,
    required: [true, "please enter an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "please enter a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  isVerifidToken: String,
  verifiedTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
