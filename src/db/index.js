import mongoose, { mongo } from "mongoose";

const connectDb = async () => {
  try {
    // await mongoose.connect(
    //   "mongodb+srv://ahsanrehman271:udemy12345@cluster0.xbpslbc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/crm_systen"
    // );
    await mongoose.connect(
      "mongodb+srv://ahsanrehman271:udemy12345@cluster0.xbpslbc.mongodb.net/crm_system"
    );
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
