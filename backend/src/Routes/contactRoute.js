/* eslint-disable no-undef */
const express = require("express");
const contactController = require("../controllers/contactController");
const router = express.Router();

router.post("/contact", contactController.SetCreateContact);
router.get("/contact", contactController.GetAllContacts);
router.get("/contact/:id", contactController.GetContactById);
router.delete("/contact/:id", contactController.DeleteContact);
router.put("/contact/:id", contactController.UpdateContact);

// reoutes pour gérer les types de contacts
router.get("/contactType", require("../controllers/ContactTypeController").SetFindContact);
router.post("/contactType", require("../controllers/ContactTypeController").SetCreateContactType);


module.exports = router;