for (let i = 0; i < 17; i++) {
    await new Promise(r => setTimeout(r, 2000));
    document.body.style.backgroundImage=`url(${i.toString()+".jpg"})`;
}