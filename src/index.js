const express = require("express");
const app = express();


const bookRoutes = require("./routes/book.routes");
const authorRoutes = require("./routes/author.routes");
const sectionRoutes = require("./routes/section.routes");

//  middle ware who allow express to read data in JSON format
app.use(express.json());

app.use("/book" , bookRoutes);
app.use("/section", sectionRoutes);
app.use("/author", authorRoutes)

module.exports = app;




