const mongoose = require("mongoose");
const numberInt = require("mongoose-int32");

require("../config/mongodbconn.cjs");

const customerSchema = new mongoose.Schema({
    customerId: String,
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    address: String,
    preferredContact: String, 
    classBalance: numberInt
}, {collection:"customer"});

module.exports = mongoose.model("Customer", customerSchema);