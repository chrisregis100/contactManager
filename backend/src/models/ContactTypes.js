/* eslint-disable no-undef */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactTypeSchema = new Schema({
  contactType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ContactTypes", contactTypeSchema);