import jwt from "jsonwebtoken";
export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  console.log(token);
  await jwt.verify(token, "mytokensecret");
  return next();
};
