'use strict'


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const questionsList = [
    {id: "1",question: "What is Batman's guilty pleasure?"},
    {id:"2",question: "I'm sorry professor, I couldn't complete my homework because _________."},
    {id:"3",question: "I get by with a little help from _________."},
    {id:"4",question: "_________. It's a trap!"},
    {id:"5",question: "The class field trip was completely ruined by _________."},
    {id:"6",question: "What's my secret power?"}
  ];


app.listen(port,function(){
	console.log('Server started on', port);
});

app.get('/',function(req,res){
	// res.send("Hit slash!")
	res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static('public'));
app.use(bodyParser());

//Hard coded in server.js
app.get('/questions', function(req,res){
	res.json(questionsList);
});
app.get('/questions/:id',function(req,res){

    for(var i=0; i<questionsList.length;i++){
    var index = req.params.id;
        if(questionsList[i].id == index){
            res.json(questionsList[i]);

        }

    }
});

app.post('/questions', function(req,res){
    questionsList.push(req.body);
    res.json(req.body);
    console.log("post hit with:" + req.body);
});