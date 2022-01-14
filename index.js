"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.get("/hola", function (req, res) {
    res.json({
        message: "hola soy el servidor"
    });
});
app.listen(3000, function () {
    console.log("hola soy express en el puerto ".concat(port));
});

// termine el video 2 clase 6