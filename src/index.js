const express = require('express');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Blogify API!' });
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/posts', postRoutes);

module.exports = app;
