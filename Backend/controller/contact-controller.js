const Contact = require("../models/contact-model")

const contactForm = async (req, res) => {
    try {
        const response = req.body
        await Contact.create(response)
        return res.json({message: "message send successfully"})
    } catch (error) {
        res.json({message: "message not delivered"})
    }
}

module.exports = contactForm