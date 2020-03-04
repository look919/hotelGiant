const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An order must have an owner name']
  },
  vorname: {
    type: String,
    required: [true, 'An order must have an owner vorname']
  },
  hotel: {
    type: String,
    required: [true, 'An order must have a choosen room']
  },
  choosenRoom: {
    type: String,
    required: [true, 'An order must have a choosen room']
  },
  phone: {
    type: String,
    required: [true, 'An order must have an owner phone nr']
  },
  email: {
    type: String,
    required: [true, 'An order must have an owner email']
  },
  country: {
    type: String,
    required: [true, 'An order must have an owner country']
  },
  town: {
    type: String,
    required: [true, 'An order must have an owner town']
  },
  adress: {
    type: String,
    required: [true, 'An order must have an owner adress']
  },
  zip: {
    type: String,
    required: [true, 'An order must have an owner zip']
  },
  info: String,
  startDate: {
    type: Date,
    required: [true, 'An order must have a start date']
  },
  endDate: {
    type: Date,
    required: [true, 'An order must have an end date']
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
