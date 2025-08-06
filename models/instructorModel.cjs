//Mongodb schema for Instructor defined here

const mongoose = require("mongoose");
require("../config/mongodbconn.cjs");

const instructorModel = new mongoose.Schema({
    instructorId: String,
    firstname: String,
    lastname: String,
    email: String,
    phoneNumber: String,
    address: String,
    preferredContact: String
}, {collection:"instructor"});

module.exports = mongoose.model("Instructor", instructorModel);