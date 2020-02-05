const express = require('express');
const roomController = require('./../controllers/roomController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(roomController.getAllRooms)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    roomController.createRoom
  );
router.use(authController.protect);
router.use(authController.restrictTo('admin'));

router
  .route('/:id')
  .get(roomController.getRoom)
  .patch(
    roomController.uploadRoomImage,
    roomController.resizeRoomImage,
    roomController.updateRoom
  )
  .delete(roomController.deleteRoom);

module.exports = router;
