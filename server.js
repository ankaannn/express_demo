//create express server
const express = require('express'); 
//set up the server
const app = express(); 
//choose port 
const PORT = 3000; 
const path = require('path');
app.listen(PORT, () => console.log('listening on port:', PORT ));


// ****** HOMEPAGE ******
app.get('/', (req, res) => {
    var options = {
        root: path.join(__dirname)
    }
    var fileName = "home.html";
    res.sendFile(fileName, options, function (err){
        if (err){
            next(err);
        }
        else{
            console.log("Sent:", fileName);
        }
    })
});

app.get('/functions.js', (req, res) => {
    var options = {
        root: path.join(__dirname)
    }
    var fileName = "functions.js";
    res.sendFile(fileName, options, function (err){
        if (err){
            next(err);
        }
        else{
            console.log("Sent:", fileName);
        }
    })
});


// ****** LOGIN PAGE ******
app.get('/login', (req, res) => {
    var options = {
        root: path.join(__dirname)
    }
    var fileName = "login.html";
    res.sendFile(fileName, options, function (err){
        if (err){
            next(err);
        }
        else{
            console.log("Sent:", fileName);
        }
    })
});



// ****** TRAINING PAGE ****** 
app.get('/trainer', (req, res) => {
    var options = {
        root: path.join(__dirname)
    }
    var fileName = "trainer.html"
    res.sendFile(fileName, options, function (err){
        if (err){
            next(err);
        }
        else{
            console.log("Sent:", fileName);
        }
    })
})

var db = {"exercises": []};
const fs = require('fs');

try {
    if (fs.existsSync('db.json')) {
        fs.readFile('db.json', function (error, content) {
            db = JSON.parse(content);
        });
    }
  } catch(err) {
  }

app.get('/addexercise', (req, res) => {
    var input_exercise = req.query.exe;
    var input_description = req.query.des;
    console.log(input_exercise);
    console.log(input_description)
    //fs = require('fs');
    //fs.writeFile("exercises.txt", `${input}\n`, {flag: 'a+'}, err => {});
    
    var exercise = {
        exercisename: input_exercise,
        description: input_description
    };

    db["exercises"].push(exercise);
    
    var data = JSON.stringify(db, null, 2);
    fs.writeFile('db.json', `${data}`, {flag: 'w'}, (err) => {
        if (err) throw err;
            console.log('Exercises added to file');
    })
});

app.get('/addexercisedecription', (req, res) => {
    var input = req.query.title;
    console.log(input);
    fs = require('fs');
    fs.writeFile("exercises.txt", `${input}\n`, {flag: 'a+'}, err => {});
});
