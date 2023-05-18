var mongoose = require("mongoose");

var workExperienceSchema = new mongoose.Schema(
    {
        companyName: {
            type: String,
            required: true,
            minlength: 3,
            trim: true,
        },
        jobTitle: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 500,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            minlength: 3,
            trim: true,
        },
        aboutRole: {
            type: String,
            minlength: 3,
            trim: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
        },
    }
)

const WorkExperience = mongoose.model("WorkExperience", workExperienceSchema);
module.exports = { WorkExperience, workExperienceSchema }