const mongoose = require('mongoose');
const slugify = require('slugify');

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A room must have a name']
  },
  slug: String,
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  photo: {
    type: String,
    required: [true, 'A room must have a photo']
  },
  size: {
    type: Number,
    required: [true, 'A room must have a size']
  },
  price: {
    type: Number,
    required: [true, 'A room must have a price']
  },
  features: {
    type: [String],
    default: ['Bedroom', 'Bathroom', 'Free WiFi']
  },
  hidden: {
    type: Boolean,
    default: false
  }
});

roomSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

roomSchema.pre(/^find/, function(next) {
  this.find({ hidden: { $ne: true } });
  next();
});

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
