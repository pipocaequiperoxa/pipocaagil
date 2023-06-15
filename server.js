const http = require("http");
const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./connector');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
    res.send("<h1>Servidor rodando com ExpressJS</h1>");
});

app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, '/public/signup.html'));
});

app.post("/register", db.createUser);

app.get('/teste', function(req, res) {
    res.sendFile(__dirname + '/public/teste.html');
})

app.post('/testePost', function(req, res) {
    console.log(req.body);
})

http.createServer(app).listen(3000, () => console.log("Servidor rodando local na porta 3000"));



