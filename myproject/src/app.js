const express = require('express');
const path = require('path');
const hbs = require('hbs');
// const fs = require('fs');
// const exp = require('constants');

// import * as express from "express";

// import express from 'express';
// import path from 'path';
// import hbs from 'hbs';

const port = process.env.PORT || 8000;
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// import * as path from "path";
// import * as hbs from "hbs";
// import * as fs from "fs";
const app = express();

app.set("view engine","hbs");
app.set("views",path.join(__dirname,"../templates/views"));
app.use(express.static(path.join(__dirname,"../public")));
hbs.registerPartials(path.join(__dirname,"../templates/partials"));

app.get("",(req,res)=>{
	res.render("index");
});

app.get("/signin",(req,res)=>{
	res.render("signin");
});

app.get("/signup",(req,res)=>{
	res.render("signup");
});

app.get("/logout",(req,res)=>{
	res.render("logout");
});

app.listen(port,()=>{
	console.log(`listening to the port ${port}`);
});

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// const dir = 'C:/Users/bunnysunny/vs_code/myproject/public/images/image3';
// var value=0;

// function direction(dir){
//     fs.readdir(dir,(err,files)=>{
//         value = files.length;
//     });
// }

// direction(dir);
// await sleep(15);
// let hello = "C:/Users/bunnysunny/vs_code/myproject/public/js/data.txt";
// let content = value.toString();

// setTimeout(() => {
//     fs.writeFile(hello,content,err =>{
//         if(err){
//             console.error;
//             return;
//         }
//     });
// }, 20);