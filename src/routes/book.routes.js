const express = require("express");

const router = express.Router();

const Book = require("../models/book.model")




router.post("/", async (req, res) => {

    console.log("body : ", req.body);

    try {
        const book = await Book.create(req.body);
        return res.status(201).send(book);

    } catch (err) {
        return res.status(500).send(error.message);
    }

})

router.get("/me", async (req, res) => {

    try {
        const books = await Book.find().
        populate({ path : "section_id", select: { name : 1}}).
        populate({ path : "author_id", select: { first_name : 1, last_name : 1 } }).
        lean().exec();
        return res.status(200).send(books);

    } catch (err) {

    }

});

router.get("/checkedout", async (req, res) => {

    try {
        const books = await Book.find({"checkedout" : true}).
        populate({ path : "section_id", select: { name : 1}}).
        populate({ path : "author_id", select: { first_name : 1, last_name : 1 } }).
        lean().exec();
        return res.status(200).send(books);

    } catch (err) {

    }

});
router.get("/notcheckedout", async (req, res) => {

    try {
        const books = await Book.find({"checkedout" : false}).
        populate({ path : "section_id", select: { name : 1}}).
        populate({ path : "author_id", select: { first_name : 1, last_name : 1 } }).
        lean().exec();
        return res.status(200).send(books);

    } catch (err) {

    }

});



//  getting all the books

router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).
        populate({ path : "section_id", select: {name : 1}}).
        populate({ path : "author_id", select: { first_name : 1, last_name : 1 } }).
        lean().exec();

        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send(error.message);

    }
})




// books in a section

router.get("/section/:ids", async (req, res) => {
    try {
        const book = await Book.find({ "section_id": req.params.ids }).
        populate({ path : "section_id", select: {name : 1}}).
        populate({ path : "author_id", select: { first_name : 1, last_name : 1 } })
        .lean().exec();

        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send(error.message);

    }
})




// books of an author

router.get("/author/:ida", async (req, res) => {
    try {
        const book = await Book.find({ "author_id": req.params.ida }).
        populate({ path : "section_id", select: {name : 1}}).
        populate({ path : "author_id", select: { first_name : 1, last_name : 1 } })
        .lean().exec();

        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send(error.message);

    }
})




// books in a section of an author

router.get("/section/:ids/author/:ida", async (req, res) => {
    try {
        const book = await Book.find({ $and: [{ "author_id": req.params.ida }, { "section_id": req.params.ids }] }).
        populate({ path : "section_id", select: {name : 1}}).
        populate({ path : "author_id", select: { first_name : 1, last_name : 1 } }).
        lean().exec();

        return res.status(200).send(book)

    } catch (error) {
        return res.status(500).send(error.message);

    }
})

router.patch("/checkedout/:id", async(req, res)=>{
    try {
        const id = req.params.id;
        // console.log(id);
        var updates = req.body;
        
        const book = await Book.findByIdAndUpdate(id, updates);

        return res.status(202).send(book);

    } catch (err) {
        return res.status(500).send(err.message);
    }
})







module.exports = router;