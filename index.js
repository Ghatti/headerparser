const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({optionSuccessStatus: 200}));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile("index.html");
})

app.get("/api/whoami", (req, res) => {

    res.json({
         ipaddress: req.ip,
         language: req.get("Accept-Language"),
         software: req.get("User-Agent")
    });
 }
);


app.listen(3000);