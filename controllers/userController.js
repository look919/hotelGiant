const User = require('./../models/userModel');
const factory = require('./handlerFactory');

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User, { path: 'room' });
exports.updateUser = factory.updateOne(User);
exports.deleteUser = factory.deleteOne(User);

exports.getLoggedInUser = () =>
  catchAsync(async (req, res, next) => {
    const user = await User.findById(req.user).populate('room');

    if (!user) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: user
      }
    });
  });
