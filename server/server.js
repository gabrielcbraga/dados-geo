const express = require('express')
const nodemailer = require('nodemailer')
const bp = require('body-parser')
const app = express()

const dotenv = require('dotenv')
dotenv.config()

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const PORT = process.env.PORT || 5000
const user = process.env.USER
const pass = process.env.PASS
const smtpMail = process.env.SMTP
const portMail = process.env.PORT_SMTP

app.get('/', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/', (req, res) => {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user,
            pass: pass,
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: user,
        subject: `Mensagem de ${req.body.email}, do site DadosGeo`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error)
        } else {
            alert('Mensagem enviada')
        }
    })
})

app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})