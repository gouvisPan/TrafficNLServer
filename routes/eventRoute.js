const express = require("express");
const eventsController = require("../controllers/eventsController");

const router = express.Router();

router.route("/latest").get(eventsController.getLatestEvents);
router.route("/all").get(eventsController.getAllEvents);
router.route("/specific/:date").get(eventsController.getSpecificEvents);

module.exports = router;
