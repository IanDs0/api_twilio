const express = require("express");
const router = express.Router();

const {
  createMessageTemplate,
  createGroup,
} = require("../controller/messageTemplates");

router.post("/messageTemplate", createMessageTemplate);
router.post("/sendGroup", createGroup);

module.exports = router;
