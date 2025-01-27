// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";

const ROLES = {
  ADMIN : 'admin',
  OWNER : 'owner',
  CASHIER : 'cashier',
  READ_ONLY : 'read-only'
};

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ message: "Forbidden" });
  }
}

function authorize(roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Permission denied" });
    }
    next();
  };
}

export { authenticate, authorize, ROLES };
