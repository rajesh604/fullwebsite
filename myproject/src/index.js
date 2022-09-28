while (true) {
    for (let i = 0; i < 25; i++) {
        await new Promise(r => setTimeout(r, 8000));
        document.body.style.backgroundImage=`url(${"blurbackgrounds_"+i.toString()+".jpg"})`;
    }
}