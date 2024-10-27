const asyncHandler = require("express-async-handler")
const Rabbit = require("../models/rabbitModel")

/**
 * @description   Get all Rabbits
 * @route         GET /api/rabbits
 * @access        Private
 */
const getRabbits = asyncHandler(async (req, res) => {
  const rabbits = await Rabbit.find()

  res.status(200).json({ rabbits })
})

/**
 * @description   Get single Rabbit
 * @route         GET /api/rabbits/:id
 * @access        Private
 */
const getRabbit = asyncHandler(async (req, res) => {
  const rabbit = await Rabbit.findById(req.params.id)

  if (!rabbit) {
    res.status(400)

    throw new Error("Kaninen går inte att hitta")
  }

  res.status(200).json({ rabbit })
})

/**
 * @description   Create Rabbit
 * @route         POST /api/rabbits
 * @access        Private
 */
const createRabbit = asyncHandler(async (req, res) => {
  const { name, breed, age, description, image } = req.body

  if (!name) {
    res.status(400)
    throw new Error("Lägg till ett namn för kaninen")
  }

  if (!breed) {
    res.status(400)
    throw new Error("Lägg till en ras för kaninen")
  }

  if (!description) {
    res.status(400)
    throw new Error("Lägg till en beskrivning för kaninen")
  }

  const rabbit = await Rabbit.create({
    name,
    breed,
    age: age || 0,
    description,
    image: image || "default_image.jpg",
  })

  res.status(200).json(rabbit)
})

/**
 * @description   Update Rabbit
 * @route         PUT /api/rabbits/:id
 * @access        Private
 */
const updateRabbit = asyncHandler(async (req, res) => {
  const rabbit = await Rabbit.findById(req.params.id)

  if (!rabbit) {
    res.status(400)

    throw new Error("Kaninen går inte att hitta")
  }

  const updatedRabbit = await Rabbit.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )

  res.status(200).json(updatedRabbit)
})

/**
 * @description   Delete Rabbit
 * @route         DELETE /api/rabbits/:id
 * @access        Private
 */
const deleteRabbit = asyncHandler(async (req, res) => {
  const rabbit = await Rabbit.findById(req.params.id)

  if (!rabbit) {
    res.status(400)

    throw new Error("Kaninen går inte att hitta")
  }

  await rabbit.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getRabbits,
  getRabbit,
  createRabbit,
  updateRabbit,
  deleteRabbit,
}
