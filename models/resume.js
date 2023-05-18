var mongoose = require("mongoose");

const { personalInfoSchema } = require("../models/personalInfo");
const { educationSchema } = require("../models/education");
const { skillSchema } = require("../models/skill");
const { projectSchema } = require("../models/project");
const { workExperienceSchema } = require("../models/workExperience");


var resumeSchema = new mongoose.Schema(
    {
        personalInfo: personalInfoSchema,
        education: [educationSchema],
        skills: [skillSchema],
        projects: [projectSchema],
        workExperience: [workExperienceSchema]
    }
)

module.exports = mongoose.model("Resume", resumeSchema);