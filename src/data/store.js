const users = [
  {
    id: '1',
    name: 'User A',
    email: 'usera@blogify.com',
    password: 'password123',
  },
  {
    id: '2',
    name: 'User B',
    email: 'userb@blogify.com',
    password: 'password123',
  },
];

let posts = [
  {
    id: '1',
    title: 'User A Post',
    content: 'This post belongs to User A.',
    ownerId: '1',
  },
  {
    id: '2',
    title: 'User B Post',
    content: 'This post belongs to User B.',
    ownerId: '2',
  },
];

const findUserByCredentials = (email, password) =>
  users.find((user) => user.email === email && user.password === password);

const findUserById = (id) => users.find((user) => user.id === id);

const getAllPosts = () => posts;

const findPostById = (id) => posts.find((post) => post.id === id);

const deletePostById = (id) => {
  const existingPost = findPostById(id);

  if (!existingPost) {
    return null;
  }

  posts = posts.filter((post) => post.id !== id);
  return existingPost;
};

module.exports = {
  findUserByCredentials,
  findUserById,
  getAllPosts,
  findPostById,
  deletePostById,
};