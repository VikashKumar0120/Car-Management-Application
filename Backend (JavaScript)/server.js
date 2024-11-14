// server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/cars');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/car-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/auth', authRoutes);
app.use('/cars', carRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
