const hello = document.getElementById('setting');
const hellos = document.getElementById('setting1');
const hellsa = document.getElementById('setting2');

hello.addEventListener("click",()=>{
    hello.style.animation = "rotation 2s 1 alternate"
    hellos.style.color = "coral"
    setTimeout(() => {
        hello.style.animation = ""
        hellos.style.color = "white"
    }, 1900);
});

hellos.addEventListener("click",()=>{
    hello.style.animation = "rotation 2s 1 alternate"
    hellos.style.color = "coral"
    setTimeout(() => {
        hello.style.animation = ""
        hellos.style.color = "white"
        hellos.classList.add('fade');
        hellsa.classList.remove('fade');
    }, 1900);
});


document.addEventListener('keypress', () => {
    alert('sorry! you have to singin/signup before viewing any further content');
    if (hellos.style.color!="coral") {
        hello.click();
    }
}, false);

hellos.addEventListener("mouseover",()=>{
    hellos.style.color = "coral";
});

hellos.addEventListener("mouseout",()=>{
    hellos.style.color = "white";
});