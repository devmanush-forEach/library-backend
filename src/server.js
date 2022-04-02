const app = require("./index")
const connect = require("./configs/db")


app.listen(2834, () => {
    try {
        connect()
        console.log("library server is running on http://localhost:2834");

    } catch (err) {
        console.log(err.message);
    }
})