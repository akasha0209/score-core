const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            require: true
        },
        lastName: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        address: {
            type: String,
            require: false,
            default: ""
        },
        type: {
            type: String,
            default: "user",
            require: false,
            enum: ["user", "admin"]
        },
        hasAgreeToTerms: {
            type: Boolean,
            default: false
        },
        isEmailverified: {
            type: Boolean,
            default: false
        },
        isEmailVerificationSent: {
            type: Boolean,
            default: false
        },
        resetPasswordToken: {
            type: String
        },
        isResetPasswordSent: {
            type: Boolean,
            default: false
        },
        isDeleted: {
            type: Boolean,
            default: false
        },
        isDeletedDate: {
            type: Date,
            default: null
        },
        status: {
            type: Number,
            default: 1 // 1-active, 0-inactive
        },
        createAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);