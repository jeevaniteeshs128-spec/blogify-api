const jwt = require('jsonwebtoken');

const { findUserById } = require('../data/store');

const protect = (req, res, next) => {
  const token = req.cookies && req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'blogify-dev-secret');
    const user = findUserById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Not authorized, user no longer exists.' });
    }

    req.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Not authorized, token is invalid.' });
  }
};

module.exports = { protect };