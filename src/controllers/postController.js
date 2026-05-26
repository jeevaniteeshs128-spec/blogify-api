const { deletePostById, findPostById, getAllPosts } = require('../data/store');

const listPosts = (req, res) => {
  return res.status(200).json({
    posts: getAllPosts(),
  });
};

const deletePost = (req, res) => {
  const post = findPostById(req.params.id);

  if (!post) {
    return res.status(404).json({ message: 'Post not found.' });
  }

  if (post.ownerId !== req.user.id) {
    return res.status(403).json({ message: 'You are not allowed to delete this post.' });
  }

  deletePostById(req.params.id);

  return res.status(200).json({
    message: 'Post deleted successfully.',
    deletedPostId: req.params.id,
  });
};

module.exports = {
  listPosts,
  deletePost,
};