'use strict'


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./models/question.js');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser());
// app.use('mongoose');
app.use(bodyParser.urlencoded({extended:true}));

const questionsList = [
    {id:"1",question: "What is Batman's guilty pleasure?"},
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



app.get('/questions', function(req,res){
    db.questions.find(function(err,questions){
        if(err){return console.log("index error:" + err);
        res.json(questions);
    }
    });
	// res.json(questionsList);
});

app.get('/questions/:id',function(req,res){
    db.findById(req.params.id), function(err,question){
    if (err){return console.log("show error:" + err);
    res.json(question);
}
};
    // for(var i=0; i<questionsList.length;i++){
    // var index = req.params.id;
    //     if(questionsList[i].id == index){
    //         res.json(questionsList[i]);

    //     }

    // }
});

app.post('/questions', function(req,res){
    var newQuestion = db.Question(req.body);
    newQuestion.save(function(err,question){
        if(err) {return console.log("create error:" + err);}
        console.log("created", question.question);
    res.json(question);
    console.log(res);
    });
    // questionsList.push(req.body);
    console.log("post hit with:" + req.body);
});