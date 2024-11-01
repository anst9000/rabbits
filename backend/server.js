const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const { errorHandler } = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000

connectDB()

const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/rabbits", require("./routes/rabbitRoutes"))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
