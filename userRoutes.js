'use strict';

var express=require('express');
var Router=express.Router();
var testData=require('./testData.json');
var errorMsgs=require('./errorMsgs.json');

//GET - / - Get total count of all users
Router.get("/",function(req,res){
    res.json(testData.get_user_count);
});

//GET - /_all - Get details of all users
Router.get("/_all",function(req,res){
    res.json(testData.getAllUsers);
});

//GET - /:userid - Get details of specific user
Router.get("/:userid",function(req,res){
    if(req.params.userid === undefined
        || req.params.userid === null){
        //No userid sent as param
        res.status(400);
        res.json(errorMsgs.missing_userid);
    }
    else{
        res.json(testData.get_dummy_user);
    }
});

module.exports=Router;