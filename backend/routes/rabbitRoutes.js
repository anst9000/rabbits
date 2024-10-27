const express = require("express")
const router = express.Router()
const {
  getRabbits,
  getRabbit,
  createRabbit,
  updateRabbit,
  deleteRabbit,
} = require("../controllers/rabbitController")

router.route("/").get(getRabbits).post(createRabbit)

router.route("/:id").get(getRabbit).put(updateRabbit).delete(deleteRabbit)

module.exports = router
