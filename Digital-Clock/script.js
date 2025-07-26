setInterval(()=>{
    let time=new Date();

    let main=time.toLocaleTimeString();

    let change=document.querySelector('.main');

    change.innerHTML=main;

},1000);