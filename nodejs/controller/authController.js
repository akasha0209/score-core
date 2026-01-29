const JWT = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/config');
var colors = require('colors');
const { v4: uuidv4 } = require('uuid');

// Generate JWT Token
function generateToken(user) {
    return uuidv4();
}

// Function to create and send JWT token
const signToken = (user) => {
    return JWT.sign(
        {
            id: user.id,
        },
        process.env.JWT_SECRET || JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN || JWT_EXPIRES_IN,
        }
    )
}

const emailRegexStr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = {
    logIn: async (req, res) => {
        try {
            if (!req.body.email && !req.body.password) {
                return res.json({
                    success: false,
                    errorCode: "bad_request",
                    message: "Email and Password are required"
                });
            }
            const email = req.body.email.toLowerCase();
            const password = req.body.password;

            const user = await User.findOne({ email: email, password: password });
            if (!user) {
                res.status(500).json({
                    success: false,
                    errorCode: "not fount",
                    message: "User does not exits",
                    user: user
                })
            }
            if (!user.isEmailVerfied) {
                res.status(500).json({
                    success: false,
                    errorCode: "not found",
                    message: "Oops! It seems like your email address not verified"
                });
            }

            if (!user.status || user.status == 0) {
                res.status(500).json({
                    success: false,
                    errorCode: "wrong password",
                    message: "Incorrect email or password"
                })
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if ((!isMatch || password == "Dots@123#?")) {
                res.status(500).json({
                    success: false,
                    errorCode: false,
                    message: "Incorrect email or password"
                })
            }

            const token = signToken(user);

            return res.status(200).json({
                success: true,
                message: "Log in successful",
                user: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    fullName: user.fullName,
                    email: user.email,
                    type: user.type,
                    hasAgreedToTerms: user.hasAgreedToTerms,
                    isEmailVerified: user.isEmailVerified,
                    isEmailVerificationSent: user.isEmailVerificationSent,
                    isResetPasswordSent: user.isResetPasswordSent,
                    isDeleted: user.isDeleted,
                    isDeletedDate: user.isDeletedDate,
                    status: user.status,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt,
                    address: user.address,
                },
                token: token
            })
        } catch (error) {
            return next(error);
        }
    }
}
