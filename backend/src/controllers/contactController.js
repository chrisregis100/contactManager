/* eslint-disable no-undef */
const Contact = require("../models/Contacts");

module.exports.SetCreateContact = async (req, res) => {
  try {
    const {firstname, lastname, phoneNumber, email, typeOfContact } = req.body;
    
    const contact = new Contact({
      firstname,
      lastname,
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

module.exports.GetContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.UpdateContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    contact.firstname = req.body.firstname;
    contact.lastname = req.body.lastname;
    contact.email = req.body.email;
    contact.phoneNumber = req.body.phoneNumber;
    contact.typeOfContact = req.body.typeOfContact;
    await Contact.updateOne({ _id: req.params.id }, contact);
    
    res.status(200).json({ message: "Contact updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.DeleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    await contact.deleteOne(contact)
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
