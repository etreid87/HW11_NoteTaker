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

app.post("/api/notes", function(err, res){
//     // try {
//         noteData = fs.readFileSync("db/db.json","utf8");
//         noteData = JSON.parse(noteData);
//     } catch (err) {
//         console.log("error");
//     }
//     res.json(noteData)
});

app.delete("/api/notes", function(err, res){



});

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"));
  });
  
 
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });
  
  app.get("/api/notes", function(req, res) {
    return res.sendFile(path.json(__dirname, "db/db.json"));
  });

  app.listen(PORT, function() {
      console.log("The server is listening:" + PORT);
  });