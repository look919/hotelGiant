const multer = require('multer');
const sharp = require('sharp');

const Room = require('./../models/roomModel');
const factory = require('./../controllers/handlerFactory');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image!', 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
});

exports.uploadRoomImage = upload.single('image');
exports.resizeRoomImage = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.body.photo = `room-${req.params.id}.jpeg`;
  await sharp(req.file.buffer)
    .resize(2000, 1333)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/rooms/${req.body.photo}`);

  next();
});

exports.createRoom = factory.createOne(Room);
exports.getAllRooms = factory.getAll(Room);
exports.getRoom = factory.getOne(Room);
exports.updateRoom = factory.updateOne(Room);
exports.deleteRoom = factory.deleteOne(Room);
