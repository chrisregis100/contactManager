/* eslint-disable no-undef */
const express = require("express");
const contactController = require("../controllers/contactController");
const router = express.Router();

router.post("/contact", contactController.SetCreateContact);
router.get("/contact", contactController.GetAllContacts);
router.get("/contactType", require("../controllers/ContactTypeController").SetFindContact);
router.post("/contactType", require("../controllers/ContactTypeController").SetCreateContactType);

module.exports = router;