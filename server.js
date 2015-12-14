var express = require('express');

//TODO - brainstorm testing piece

//TODO - require in mongoose

//TODO - create mongo DB

//TODO - create mongo schemas

//TODO - sketch out what app is going to do
  //https://moqups.com/

//TODO - write simple HTML File

//TODO - add a mongo feature not discussed in class
//TODO - what routes do you need?
// - / video  /add    /delete /edit
app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile('./public/index.html');
});

app.listen(3000, function() {
    console.log('listening on port 3000...');
});
