const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) 
    return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

const authorize = (roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Forbidden' });
  }
  next();
};

module.exports = { authenticate, authorize };