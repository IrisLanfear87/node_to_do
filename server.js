const express = require('express');
const mongojs = require('mongojs');
const bodyParser = require('body-parser');
var db = mongojs('mongodb://localhost:27017/final_app',['todos'])
var app = express();


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.get('/getData', function (req,res) {
  db.todos.find({}, function (err, docs) {
    res.send(docs)
  }) //prazan objekat znaci find all
})

app.post('/insertTodo', function (req,res) {
   db.todos.insert ({msg : req.body.newMsg}, function (err) {//ova linija koda insertuje ono iz inputa u mongodb
     db.todos.find({}, function (err,docs) {
       res.send(docs)
     })
   })

})

app.post('/deleteTodo', function (req,res) {
  db.todos.remove({_id : db.ObjectId(req.body.id)}, function (err) {
    db.todos.find({},function (err,docs) {
      res.send(docs)
    })
  })
})

app.listen(3000, function () {
  console.log('server started...');
})
