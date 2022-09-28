import fs from 'fs';
// const hello = document.getElementById('body');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// var datas = 0;
// fs.readFile('data.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     datas = parseInt(data);
// });

// await sleep(15);

const dir = 'C:/Users/bunnysunny/vs_code/myproject/public/images/image3';
var value=0;
var array;
function direction(dir){
    fs.readdir(dir,(err,files)=>{
        value = files.length;
        array = files;
    });
}

direction(dir);
await sleep(15);

for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
        // hello.style.backgroundImage = `/images/image3/${array[i]}`
        // console.log(`/images/image3/${array[i]}`);
        console.log(`C:/Users/bunnysunny/vs_code/myproject/public/images/image3/${array[i]}`);
    }, 2000);
}