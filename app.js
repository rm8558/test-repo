'use strict';

var express=require('express');
var jsonParser=require('body-parser').json;
var logger=require("morgan");
var userRoutes=require('./userRoutes');

var port=process.env.PORT||3000;
var app=express();

app.use(logger("dev"));
app.use(jsonParser());
app.use("/_user",userRoutes);

app.listen(port,function(){
   console.log(`App running on port ${port}`);
});
