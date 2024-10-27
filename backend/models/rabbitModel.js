const mongoose = require("mongoose")

const rabbitSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Lägg till ett namn för kaninen"],
    },
    breed: {
      type: String,
      required: [true, "Lägg till en ras för kaninen"],
    },
    age: {
      type: Number,
    },
    description: {
      type: String,
      required: [true, "Lägg till en beskrivning för kaninen"],
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Rabbit", rabbitSchema)
