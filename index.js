const app = require('./app')
require('dotenv').config()

const port = process.env.PORT || 2003


app.listen(port, () => console.log(`Welcome to port ${port} ^_^!`))