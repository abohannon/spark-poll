const express = require('express')
const routes = require('./routes')
const app = express()

routes(app)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`w00t! Server up on port ${PORT}!`)
})

module.exports = app;
