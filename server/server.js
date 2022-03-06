const express = require('express')
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => { 
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});

app.post('/', (req, res) => {
    console.log(req.body)
})

app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})