var mongoose = require("mongoose");

var educationSchema = new mongoose.Schema(
    {
        degreeName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100,
            trim: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
        },
        percentage: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
        },
        institutionName: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 300,
            trim: true,
        },
    }
)

const Education = mongoose.model("Education", educationSchema);
module.exports = { Education, educationSchema }