// google data
const iframetag = document.getElementsByTagName('iframe');
iframetag[0].classList.add('display');
iframetag[0].setAttribute('id','googleframe');

// document data
const hello = document.getElementById('location');
const frame = document.getElementById('googleframe');
const student_via = document.getElementById('student');
const citizen_via = document.getElementById('citizen');
const entrepreneur_via = document.getElementById('entrepreneur');
const entertainment_via = document.getElementById('entertainment');
const businessman_via = document.getElementById('businessman');
const student_dispaly = document.getElementById('student_id');
const citizen_display = document.getElementById('citizen_id')
const entrepreneur_display = document.getElementById('entrepreneur_id');
const entertainment_display = document.getElementById('entertainment_id');
const finance_display = document.getElementById('finance_id');
const display_class = document.getElementsByClassName('class_id');

hello.addEventListener('click',()=>{
  if (frame.classList.contains('display')){
    frame.classList.remove('display');
  }else{
    frame.classList.add('display');
  }
});

hello.addEventListener('dblclick',()=>{
  frame.classList.add('display');
});

student_via.addEventListener('click',()=>{
  for (let i = 0; i < display_class.length; i++) {
    display_class[i].classList.add('display');
  }
  display_class[0].classList.remove('display');
});

citizen_via.addEventListener('click',()=>{
  for (let i = 0; i < display_class.length; i++) {
    display_class[i].classList.add('display');
  }
  display_class[1].classList.remove('display');
});

entrepreneur_via.addEventListener('click',()=>{
  for (let i = 0; i < display_class.length; i++) {
    display_class[i].classList.add('display');
  }
  display_class[2].classList.remove('display');
});

entertainment_via.addEventListener('click',()=>{
  for (let i = 0; i < display_class.length; i++) {
    display_class[i].classList.add('display');
  }
  display_class[3].classList.remove('display');
});

businessman_via.addEventListener('click',()=>{
  for (let i = 0; i < display_class.length; i++) {
    display_class[i].classList.add('display');
  }
  display_class[4].classList.remove('display');
});

// adding data to mongoose database
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27027/signup");

