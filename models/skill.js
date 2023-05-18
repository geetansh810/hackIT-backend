var mongoose = require("mongoose");

var skillSchema = new mongoose.Schema(
    {
        skill: {
            type: String,
            required: true,
            minlength: 3,
            trim: true,
        },
        proficiency: {
            type: Number,
            required: true,
            min: 0,
            max: 100,
        },

    }
)

const Skill = mongoose.model("Skill", skillSchema);
module.exports = { Skill, skillSchema }