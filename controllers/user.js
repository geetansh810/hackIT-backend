const User = require("../models/user");
const Resume = require("../models/resume");


//find user using user details
exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: "No user found in DB" });
    }
    // console.log(user);
    req.profile = user;
    next();
  });
};

//return user details
exports.getUser = (req, res) => {
  req.profile.salt = undefined;
  req.profile.encry_password = undefined;
  req.profile.createdAt = undefined;
  req.profile.updatedAt = undefined;
  return res.json(req.profile);
};

//update user details
exports.updateUser = (req, res) => {

  console.log("Resume");

  if (!req.body.hasOwnProperty("userInfo")) {
    return res.status(200).json({
      error: "Deatils not found",
    });
  }

  const resumeData = new Resume(
    {
      "personalInfo": req.body.userInfo.personalData,
      "education": req.body.userInfo.education,
      "skills": req.body.userInfo.skills,
      "projects": req.body.userInfo.projects,
      "workExperience": req.body.userInfo.workExperience,
    })

  resumeData.save((err, resume) => {
    if (err || !resume) {
      return res.status(400).json({
        message: "No data found",
        error: err
      });
    }

    console.log(resume);

    User.findOneAndUpdate(
      { _id: req.profile._id },
      {
        $set: {
          "userInfo": resume,
          "resumeDetails": true
        },
      },
      { new: true, useFindAndModify: false }
    )
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            error: "User not found",
          });
        }

        user.salt = undefined;
        user.encry_password = undefined;
        user.createdAt = undefined;
        user.updatedAt = undefined;

        return res.status(200).json({
          message: "User Details Updated",
          user: user,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          error: "Server Error",
        });
      });

  })
};

exports.getUserResume = (req, res) => {
  Resume.findById(req.profile.userInfo).exec((err, resume) => {
    if (err || !resume) {
      return res.status(400).json({
        message: "No data found",
        error: err
      });
    }
    return res.status(200).json({
      message: "Resume Data Found",
      resume: resume
    });

  })
}


// exports.getUsers = (req, res) => {
//   User.find({}).exec((err, users) => {
//     if (err || !users) {
//       return res.status(400).json({ error: "No users found in DB" });
//     }
//     res.json(users);
//   });
// };