const User = require("../models/user");

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

// exports.getUsers = (req, res) => {
//   User.find({}).exec((err, users) => {
//     if (err || !users) {
//       return res.status(400).json({ error: "No users found in DB" });
//     }
//     res.json(users);
//   });
// };