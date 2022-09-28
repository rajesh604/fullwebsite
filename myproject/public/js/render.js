const helloa = document.getElementsByClassName('noneli');

helloa[0].addEventListener("click",()=>{
    document.location.href=document.location.href+"signin";
})

helloa[1].addEventListener("click",()=>{
    document.location.href=document.location.href+"logout";
})