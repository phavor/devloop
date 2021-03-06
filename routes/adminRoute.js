const express = require("express");
const router = express.Router();

const controller = require("../controllers/users");
const { isLoggedIn } = require('../middlewares/auth')

// Get the Admin Login Form
router.get('/', controller.AdminLogin)

// Handle Admin Login
router.post('/', controller.loginAdmin)

// Get the Admin Register Form
router.get('/new', controller.AdminRegister)

// Handle Admin Registration
router.post('/new', controller.adminReg)

// Render Dashboard
router.get('/dashboard', isLoggedIn, controller.dashboard)

// Logout user
router.get('/logout', controller.logout)

module.exports = router