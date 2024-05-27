const express = require('express')
const router = express.Router()
const authController = require("../controller/auth-controller")
const signupSchema = require("../Validators/auth-validator")
const validator = require("../middlewares/validate-middlewares")
const loginSchema = require("../Validators/auth-login")

router.route("/").get(authController.home)

router.route("/register").post(validator(signupSchema), authController.register)

router.route("/login").post(validator(loginSchema), authController.login)


module.exports = router