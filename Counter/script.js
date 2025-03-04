let value=document.querySelector("#value");
let inc=document.querySelector("#plus");
let dec=document.querySelector("#minus");
let res=document.querySelector("#zero");

let curval=0;

inc.addEventListener("click",()=>{
    curval=curval+1;
    value.innerHTML=`${curval}`;
    if(curval===0){
        value.style.color="white"
    }
    else if(curval>0){
        value.style.color="green"
    }
    else if(curval<0){
        value.style.color="red"
    }
    inc.classList.add("click")
    setTimeout(()=>{
        inc.classList.remove("click")
    },100)
})


dec.addEventListener("click",()=>{
    curval=curval-1;
    value.innerHTML=`${curval}`;
    if(curval===0){
        value.style.color="white"
    }
    else if(curval>0){
        value.style.color="green"
    }
    else if(curval<0){
        value.style.color="red"
    }
    dec.classList.add("click")
    setTimeout(()=>{
        dec.classList.remove("click")
    },100)
})

res.addEventListener("click",()=>{
    curval=0;
    value.innerHTML=`${curval}`;
    value.style.color="white"
    res.classList.add("click")
    setTimeout(()=>{
        res.classList.remove("click")
    },100)
})