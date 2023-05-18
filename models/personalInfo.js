var mongoose = require("mongoose");

var personalInfoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
            trim: true,
        },
        dob: {
            type: Date,
            required: true,
        },
        phoneNumber: {
            type: Number,
            required: true,
            min: 1000000000,
            max: 9999999999,
            default: 1234567890,
            unique: true,
            index: true,
            validate: {
                validator: function (v) {
                    return /^\d{10}$/.test(v);
                },
                message: "{PATH} is not a valid phone number"
            }
        },
        address: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 300,
            trim: true,
        },
        rollNumber: {
            type: String,
            minlength: 3,
            maxlength: 300,
            trim: true,
        }
    }
)

const PersonalInfo = mongoose.model("PersonalInfo", personalInfoSchema);

module.exports = { PersonalInfo, personalInfoSchema };