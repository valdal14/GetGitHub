const express = require('express');
const bodyParser = require('body-parser');
var serveStatic = require('serve-static');

//import githug class
const GitHub = require('./github').GitHub;

const app = express();

// Middleware serve static pages
app.use(serveStatic('./public/', {'index': ['index.html', 'index.htm']}));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res)=>{

});

app.post('/getProfile', (req, res)=>{
    res.status(201).send({user: req.body.username })
    //GitHub.getProfile(req.body.username);
})

// start server
app.listen(3000, ()=> console.log("Server started at port 3000"));