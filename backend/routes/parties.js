const router = require("express").Router();

const partyController = require("../controller/partyController")
router.route("/parties").post((req, res) => {partyController.create(req, res);});
//* Funções

module.exports = router;
