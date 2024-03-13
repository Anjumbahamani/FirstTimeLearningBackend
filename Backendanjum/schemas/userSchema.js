import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const reqString = {
  type: String,
  required: true,
};

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: reqString,
  password: reqString,
  role: {
    type: String,
    enum: ["ADMIN", "STUDENT"],
    default: "STUDENT",
  },
});

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }

//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.passward, salt);
// });

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.passward);
// };

const User = mongoose.model("users", userSchema);

export default User;
