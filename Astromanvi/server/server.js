const express = require("express");
const app =express();
const cors = require("cors");

const sendMail = require("./controllers/sendMail");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("I am a server");
});

app.post("/sendmail", sendMail);

app.listen(8080, () =>{
    console.log("Server started on port 8080");
});