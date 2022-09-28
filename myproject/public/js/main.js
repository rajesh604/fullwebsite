const arrow_left = document.getElementById('left');
const arrow_right = document.getElementById('right');
const arrow_left1 = document.getElementById('left1');
const arrow_right1 = document.getElementById('right1');
const arrow_left2 = document.getElementById('left2');
const arrow_right2 = document.getElementById('right2');

const image = document.getElementsByClassName('slides');
const image1 = document.getElementsByClassName('slides1');
const image2 = document.getElementsByClassName('slides2');

arrow_left.addEventListener("click",()=>{
    for (let i = 0; i < image.length; i++) {
        const element = image[i].classList.contains('fade');
        if (element==false) {
            image[i].classList.add('fade');
            if (i==0) {
                image[4].classList.remove('fade');
                break;
            }
            else{
                image[i-1].classList.remove('fade');
                break;
            }
        }
    }
});

arrow_left1.addEventListener("click",()=>{
    console.log(1);
    for (let i = 0; i < image1.length; i++) {
        const element = image1[i].classList.contains('fade');
        if (element==false) {
            image1[i].classList.add('fade');
            if (i==0) {
                image1[4].classList.remove('fade');
                break;
            }
            else{
                image1[i-1].classList.remove('fade');
                break;
            }
        }
    }
});

arrow_left2.addEventListener("click",()=>{
    for (let i = 0; i < image2.length; i++) {
        const element = image2[i].classList.contains('fade');
        if (element==false) {
            image2[i].classList.add('fade');
            if (i==0) {
                image2[4].classList.remove('fade');
                break;
            }
            else{
                image2[i-1].classList.remove('fade');
                break;
            }
        }
    }
});

arrow_right.addEventListener("click",()=>{
    for (let i = 0; i < image.length; i++) {
        const element = image[i].classList.contains('fade');
        if (element==false) {
            image[i].classList.add('fade');
            if (i==4) {
                image[0].classList.remove('fade');
                break;
            }
            else{
                image[i+1].classList.remove('fade');
                break;
            }
        }
    }
});

arrow_right1.addEventListener("click",()=>{
    for (let i = 0; i < image1.length; i++) {
        const element = image1[i].classList.contains('fade');
        if (element==false) {
            image1[i].classList.add('fade');
            if (i==4) {
                image1[0].classList.remove('fade');
                break;
            }
            else{
                image1[i+1].classList.remove('fade');
                break;
            }
        }
    }
});

arrow_right2.addEventListener("click",()=>{
    for (let i = 0; i < image2.length; i++) {
        const element = image2[i].classList.contains('fade');
        if (element==false) {
            image2[i].classList.add('fade');
            if (i==4) {
                image2[0].classList.remove('fade');
                break;
            }
            else{
                image2[i+1].classList.remove('fade');
                break;
            }
        }
    }
});