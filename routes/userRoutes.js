const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

router.get('/auth', authController.isLoggedIn, authController.getLoggedInUser);

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
//USERS AUTHENTICATED
router.use(authController.protect);
router.patch('/updatepassword', authController.updatePassword);

router.route('/:id').patch(userController.updateUser);
//RESTRICTED TO ADMIN
router.use(authController.restrictTo('admin'));

router.route('/').get(userController.getAllUsers);
router
  .route('/:id')

  .get(userController.getUser)
  .delete(userController.deleteUser);

module.exports = router;
