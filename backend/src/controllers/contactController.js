/* eslint-disable no-undef */
const Contact = require("../models/Contacts");

module.exports.SetCreateContact = async (req, res) => {
  try {
    const { name, firstname, phoneNumber, email, typeOfContact } = req.body;
    const contact = new Contact({
      name,
      firstname,
      phoneNumber,
      email,
      typeOfContact,
    });
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.GetAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
