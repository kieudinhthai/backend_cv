const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "kieudinhthaisending@gmail.com",
        pass: "kieudinhthaipassword",
    },
    tls: { rejectUnauthorized: false }
})

/**
 * POST /
 * 
 */
router.post('/', (req, res) => {
 
    const mailOption = {
        from: "kieudinhthaisending@gmail.com",
        to: "kieudinhthai36200@gmail.com",
        subject: req.body.subject,
        text: req.body.text
    }
    

    transporter.sendMail(mailOption)
        .then((mail) => {
            res.status(200).json(mail)
           console.log('sent success')
        })
        .catch(err => {
            res.status(500).json(err)
            console.log('sent fail')
        })
})

module.exports = router;
