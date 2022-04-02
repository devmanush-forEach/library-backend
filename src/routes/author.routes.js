const express = require("express");

const router = express.Router();

const Author = require("../models/author.model");

router.get("/", async (req, res) => {
    try {
        const author = await Author.find().lean().exec();
        return res.status(200).send(author);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})
router.post("/", async (req, res) => {

    console.log()

    try {
        const author = await Author.create(req.body);
        return res.status(200).send(author);
    } catch (error) {
        return res.status(500).send(error.message);
    }
})


module.exports = router;