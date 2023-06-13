const http = require("http");
const express = require("express");
const app = express();
const path = require('path');

app.get("/", function(req, res) {
    res.send("<h1>Servidor rodando com ExpressJS</h1>");
});

app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, '/signup.html'));
});

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));



