import jwt from "jsonwebtoken";

const createAccessToken = (user) => {
  const accessToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1D" }
  );
  return accessToken;
};

export default createAccessToken;
