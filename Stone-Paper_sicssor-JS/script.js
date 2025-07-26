const rock=document.querySelector(".rock");

const scissor=document.querySelector(".scissor");

const paper=document.querySelector(".paper");

const yourScore=document.querySelector(".score1");
const comScore=document.querySelector(".score2");

const won=document.querySelector(".winning");

const draw=document.querySelector(".draw");

const lost=document.querySelector(".lost");

const play=document.querySelector(".play");

const option=document.querySelector(".option");

let a=0;
let c=0; 

rock.addEventListener("click",()=>{
    
    let b=Math.floor(Math.random()*3);

    // option.style.transform="scale(0.9688)";
    
    if(1===(b+1)){
        draw.style.display="flex";
        won.style.display="none";
        play.style.display="none";
        lost.style.display="none";

    }

    else if((b+1)===2){
        draw.style.display="none";
        won.style.display="none";
        play.style.display="none";
        lost.style.display="flex";
        a++;
        comScore.innerHTML=a;
    }

    else if((b+1)===3){
        draw.style.display="none";
        won.style.display="flex";
        play.style.display="none";
        lost.style.display="none";
        c++;
        yourScore.innerHTML=c;

    }


});




paper.addEventListener("click",()=>{

    // option.style.transform="scale(0.9688)";
    
    let b=Math.floor(Math.random()*3);
    console.log(b);
    if(1===(b+1)){
        draw.style.display="none";
        won.innerHTML="Paper Won Against Rock";
        won.style.display="flex";
        play.style.display="none";
        lost.style.display="none";

        c++;
        yourScore.innerHTML=c;


    }

    else if((b+1)===2){
        draw.style.display="flex";
        won.style.display="none";
        play.style.display="none";
        lost.style.display="none";
        
    }

    else if((b+1)===3){
        draw.style.display="none";
        won.style.display="none";
        play.style.display="none";
        lost.style.display="flex";
       
        a++;
        comScore.innerHTML=a;

    }



});



scissor.addEventListener("click",()=>{

    // option.style.transform="scale(1.3)";
    
    let b=Math.floor(Math.random()*3);
    console.log(b);
    if(1===(b+1)){
        draw.style.display="none";
        won.style.display="none";
        play.style.display="none";
        lost.style.display="flex";
        a++;
        comScore.innerHTML=a;

    }

    else if((b+1)===2){
        draw.style.display="none";
        won.style.innerHTML="Scissor Won Against Paper!!";
        won.style.display="flex";
        play.style.display="none";
        lost.style.display="none";
        c++;
        yourScore.innerHTML=c;
        
    }

    else if((b+1)===3){
        draw.style.display="flex";
        won.style.display="none";
        play.style.display="none";
        lost.style.display="none";
        

    }


});