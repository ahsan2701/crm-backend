import express from "express";
import cookieParser from "cookie-parser";
import connectDb from "./db/index.js";
import customerRouter from "./routes/customer.routes.js";
import cors from "cors";
import userRouter from "./routes/user.routes.js";
const port = 8000;
const app = express();
app.use(express.json());
app.use(cors({ credentials: true }));
app.use(cookieParser());
app.use(customerRouter);
app.use(userRouter);
app.listen(port, async () => {
  await connectDb();
  console.log(`Server is running on port ${port}`);
});
