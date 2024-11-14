// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: 'User created' });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !(await user.comparePassword(req.body.password))) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, 'secret');
    res.send({ token });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;



// routes/cars.js
const express = require('express');
const Car = require('../models/Car');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const car = new Car({ ...req.body, user: req.user._id });
    await car.save();
    res.status(201).send(car);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const cars = await Car.find({ user: req.user._id });
    res.send(cars);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Additional routes for update, delete, and search...

module.exports = router;

// Middleware for Authentication

// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'secret');
    const user = await User.findById(decoded.userId);
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ message: 'Please authenticate' });
  }
};
