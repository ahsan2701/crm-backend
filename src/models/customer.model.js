import mongoose from "mongoose";
const { Schema } = mongoose;

const customerSchema = new Schema({
  name: { type: "string", require: true },
  email: { type: "string", unique: true, require: true },
  education: { type: "string", require: true },
  contacts: [{ type: Schema.Types.ObjectId, ref: "Contact" }],
});

const Customer = mongoose.model("Customer", customerSchema);
export { Customer };
