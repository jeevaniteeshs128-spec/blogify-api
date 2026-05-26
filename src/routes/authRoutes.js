const express = require('express');

const { login, logout } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.get('/me', protect, (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;