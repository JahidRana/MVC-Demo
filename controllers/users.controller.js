const users=require("../models/users.model");
const path=require("path");

exports.homeRoute=(req, res) => {
    res.status(200).send("Welcome to Home route");
  }


exports.getUsers= (req, res) => {
    res.status(200).sendFile(path.join(__dirname+"/../views/index.html"));
  }

  exports.saveUser=(req, res) => {
    const name=req.body.name;
    const age=req.body.age;

    const user={
        name,
        age
    }
    users.push(user);

    res.send(users);
  
  }