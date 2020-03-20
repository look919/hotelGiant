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
  await new Email(
    doc,
    `${req.protocol}://${req.get('host')}/api/v1/orders/confirm/${doc._id}`
  ).sendOrder();

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
