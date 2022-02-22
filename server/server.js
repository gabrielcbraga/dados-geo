const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

// Middleware

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/')
})

app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})