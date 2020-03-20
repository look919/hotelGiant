const express = require('express');
const orderController = require('./../controllers/orderController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.route('/confirm/:id').get(orderController.confirmOrder);
router.route('/').post(orderController.createOrder);

router.use(authController.protect);
router.use(authController.restrictTo('admin'));

router.route('/').get(orderController.getAllOrders);

router
  .route('/:id')
  .get(orderController.getOrder)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
