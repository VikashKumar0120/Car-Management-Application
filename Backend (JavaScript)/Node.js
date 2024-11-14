// 1. Setup and Dependencies :

npm init -y
npm install express mongoose bcryptjs jsonwebtoken multer

// npm init -y
npm install express mongoose bcryptjs jsonwebtoken multer

// models/User.js :
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);


// Car Model :
// models/Car.js
const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  tags: [{ type: String }],
});

module.exports = mongoose.model('Car', carSchema);



