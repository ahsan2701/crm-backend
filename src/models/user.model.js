import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  password: { type: "string", require: true },
  email: { type: "string", unique: true, require: true },
});

const User = mongoose.model("User", userSchema);
export { User };
