
const express = require("express");
const router = express.Router();
const { getUsers, saveUser, homeRoute } = require("../controllers/users.controller");

router.get("/", homeRoute);
router.get("/user", getUsers);
router.post("/user", saveUser);



module.exports = router;
