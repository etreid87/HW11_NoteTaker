const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3006;

let noteData = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "/public")));

app.get("/api/notes", function(err, res){
    try {
        noteData = fs.readFileSync("db/db.json","utf8");
        noteData = JSON.parse(noteData);
    } catch (err) {
        console.log("error");
    }
    res.json(noteData)
});

