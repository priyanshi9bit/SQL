// const express = require("express");
import express from "express";
import { router } from "./routes.js";
import mysql from "mysql";
import con from "./connection.js";
import bodyParser from "body-parser";

const app = express();
//middleware to use bpdy parser
app.use(bodyParser.urlencoded({extended:true}));
// to get data from frontend in backend
app.use(bodyParser.json());
const port = 3000
app.set('view engine','ejs');
//Routing
app.get('/',function(req,res){
  res.render('add');
})
app.get('/add', function(req,res){
  var name = req.body.name;
    var jobtile = req.body.jobtile;
    var number = req.body.number;
    var email = req.body.email;
    var address = req.body.address;
    var city = req.body.city;
    var state = req.body.state;

    var sql = `insert into employee(Name,JobTitle,PhoneNumber,Email,Address,City,State)
                values('${name}', '${jobtile}','${number}','${email}','${address}','${city}','${state}')`;
    con.query(sql,function(err,results){
        if(err)
        console.log("error in add.js , ",err)
        
        res.send("<h1>Data added ... </h1>")
});
});


app.get('/view',(req,res)=>{
  var sql = "select * from employee";

  con.query(sql, function(err,results){
    if(err)console.log("in view ", err)
    console.log(results)
    res.render('getAll',{employees:results})

  })
})


app.get('/delete/:id', function(req,res){
  var id = req.params.id;
  var sql = `delete from employee where user_id = '${id}'`;

  con.query(sql, function(err, results){
    if(err) throw err;
    res.redirect('/view');
  });
});

app.get('/edit/:id', function(req,res){
  var id = req.params.id;
  var sql = `select * from employee where user_id = '${id}'`;

  con.query(sql, function(err, results){
    if(err) throw err;
    res.render('edit', {employees:results});
  });
});

app.post('/update/id', function(req,res){
  var id = req.params.id;
  var name = req.body.name;
  var jobtile = req.body.jobtile;
  var number = req.body.number;
  var email = req.body.email;
  var address = req.body.address;
  var city = req.body.city;
  var state = req.body.state;

  var sql = `update employee set Name='${name}', JobTitle='${jobtile}',PhoneNumber='${number}' ,Email='${email}',Address='${address}',City='${city}',State='${state}' where user_id ='${id}'`;
  con.query(sql,function(err,results){
      if(err)
      throw err;
      res.redirect('/view');
});
});
app.use('/', router);

//creating server
app.listen(port, (err) =>{
  if(err)
    console.log("error in server creation ",err);
  else
    console.log("Server is running at port %d", port);
});