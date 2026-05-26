const jwt = require('jsonwebtoken');

const { findUserByCredentials } = require('../data/store');

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = findUserByCredentials(email, password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    process.env.JWT_SECRET || 'blogify-dev-secret',
    { expiresIn: '7d' }
  );

  res.cookie('jwt', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return res.status(200).json({
    message: 'Login successful.',
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  });
};

const logout = (req, res) => {
  res.clearCookie('jwt');
  return res.status(200).json({ message: 'Logged out successfully.' });
};

module.exports = {
  login,
  logout,
};