const asyncHandler = require("express-async-handler")

/**
 * @description   Get all Rabbits
 * @route         GET /api/rabbits
 * @access        Private
 */
const getRabbits = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all Rabbits" })
})

/**
 * @description   Get single Rabbit
 * @route         GET /api/rabbits/:id
 * @access        Private
 */
const getRabbit = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ message: `Get single Rabbit with id ${req.params.id}` })
})

/**
 * @description   Create Rabbit
 * @route         POST /api/rabbits
 * @access        Private
 */
const createRabbit = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)

    throw new Error("Please add a text field")
  }

  res.status(200).json({ message: "Create Rabbit" })
})

/**
 * @description   Update Rabbit
 * @route         PUT /api/rabbits/:id
 * @access        Private
 */
const updateRabbit = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Rabbit ${req.params.id}` })
})

/**
 * @description   Delete Rabbit
 * @route         DELETE /api/rabbits/:id
 * @access        Private
 */
const deleteRabbit = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Rabbit ${req.params.id}` })
})

module.exports = {
  getRabbits,
  getRabbit,
  createRabbit,
  updateRabbit,
  deleteRabbit,
}
