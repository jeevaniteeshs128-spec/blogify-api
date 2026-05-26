const express = require('express');

const { deletePost, listPosts } = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', listPosts);
router.delete('/:id', protect, deletePost);

module.exports = router;