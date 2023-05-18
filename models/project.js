var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema(
    {
        projectName: {
            type: String,
            required: true,
            minlength: 3,
            trim: true,
        },
        techUsed: {
            type: String,
            minlength: 3,
            trim: true,
        },
        aboutProject: {
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

const Project = mongoose.model("Project", projectSchema);
module.exports = { Project, projectSchema }