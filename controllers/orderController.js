const Order = require('./../models/orderModel');
const factory = require('./handlerFactory');
const catchAsync = require('./../utils/catchAsync');
const Email = require('../utils/email');

exports.getAllOrders = factory.getAll(Order);
exports.getOrder = factory.getOne(Order);
exports.updateOrder = factory.updateOne(Order);
exports.deleteOrder = factory.deleteOne(Order);

exports.createOrder = catchAsync(async (req, res, next) => {
  const doc = await Order.create(req.body);

  const url =
    process.env.NODE_ENV === 'development'
      ? `http://127.0.0.1:3000/order/${doc._id}`
      : `https://hotelgiant.herokuapp.com/order/${doc._id}`;

  await new Email(doc, url).sendOrder();

  res.status(201).json({
    status: 'success',
    data: {
      data: doc
    }
  });
});

exports.confirmOrder = async (req, res, next) => {
  const doc = await Order.findById(req.params.id);

  if (!doc) {
    return next(new AppError('No document found with that ID', 404));
  }
  doc.confirmed = true;

  await doc.save();

  res.status(200).json({
    status: 'success',
    info: 'Your order has been successfully confirmed'
  });
};
