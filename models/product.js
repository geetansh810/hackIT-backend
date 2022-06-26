const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    jobProfile: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    eligiblity: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    minSalary: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true,
    },
    maxSalary: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    registerLink: {
      type: String,
      trim: true,
      required: true,
      maxlength: 100,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    lastDateToRegister: {
      type: Date,
      required: true,
    },
    examDateStart: {
      type: Date,
      required: true,
    },
    examDateEnd: {
      type: Date,
      required: true,
    },
    yearStart: {
      type: Number,
      required: true,
      maxlength: 4,
      trim: true,
    },
    yearEnd: {
      type: Number,
      required: true,
      maxlength: 4,
      trim: true,
    },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
