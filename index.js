const express = require("express");
const format = require('date-format');
const app = express();

const PORT = 4000 || process.env.PORT ;


app.get("/", (req,res) => {
    res.status(200).send("Hello")
})


app.get("/api/v1/hello", (req, res) => {
    res.send("Test message")
})


app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "Aditya",
        followers: 69,
        follows: 469,
        date: format.asString("dd/MM/yyyy - hh:mm:ss", new Date())
    }

    res.status(200).json( instaSocial )
})

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: "Aditya",
        followers: 978,
        follows: 413569,
        date: format.asString("dd/MM/yyyy - hh:mm:ss", new Date()),
    }

    res.status(200).json( instaSocial )
})

app.get("/api/v1/linkedIn", (req, res) => {
    const instaSocial = {
        username: "Aditya",
        followers: 9478,
        follows: 45,
        date: new Date(),
    }

    res.status(200).json( instaSocial )
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
