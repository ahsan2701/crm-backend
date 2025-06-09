import mongoose from "mongoose";
const { Schema } = mongoose;

const contactSchema = new Schema({
  contact: { type: Schema.Types.ObjectId, ref: "Customer" },
});

const Contact = mongoose.model("Contact", contactSchema);
export { Contact };
