/* eslint-disable no-undef */
const ContactTypes = require("../models/ContactTypes");

module.exports.SetCreateContactType=async (req, res) => {
  try {
    const  {contactType}  = req.body;
    console.log(contactType);
    
    const typeContact = new ContactTypes({
      contactType,
    });
    await typeContact.save();
    res.status(201).json({message:"contact crée", typeContact});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.SetFindContact = async (req, res) => {
  try {
    //const  {contactType } = req.body;
    const contactTypes = await ContactTypes.find();
      
    res.status(200).json(contactTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};