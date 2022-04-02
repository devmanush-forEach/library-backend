const express = require("express");

const router = express.Router();

const Section = require("../models/section.model");


router.get("/", async (req, res) => {
    try {
        const book = await Section.find().lean().exec();
        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send(error.message);

    }
})



router.get("/book/:id", async (req, res) => {
    try {
        const book = await Book.find({ "section_id": req.params.section_id }).lean().exec();

        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send(error.message);

    }
})


router.post("/", async (req, res) => {

    console.log("body :", req.body);

    try {
        const section = await Section.create(req.body);
        return res.status(201).send(section);

    } catch (err) {
        console.log(err);

    }

})

// router.patch("/:id", async (req, res) => {

//     console.log("body : ", req.body);

//     try {
//         const section = await Section.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
//         return res.status(201).send(section);

//     } catch (err) {
//         console.log(err);

//     }

// })
// router.put("/:id", async (req, res) => {

//     console.log("body : ", req.body);

//     try {
//         const section = await Section.findByIdAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
//         return res.status(201).send(section);

//     } catch (err) {
//         console.log(err);

//     }

// })
// router.delete("/:id", async (req, res) => {

//     console.log("body : ", req.body);

//     try {
//         const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
//         return res.status(200).send(section);

//     } catch (err) {
//         console.log(err);

//     }

// })


module.exports = router;