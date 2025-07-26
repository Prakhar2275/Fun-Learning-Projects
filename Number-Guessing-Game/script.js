let random=parseInt(Math.random()*100+1);

const submitButton=document.querySelector("#subt")

const userInput=document.querySelector("#guessFelid")

const gusses=document.querySelector("#gusses")

const remaining=document.querySelector("#lastResult")

const hint=document.querySelector(".loworhigh")

const resultParas=document.querySelector(".result")

const startNewButton=document.querySelector(".new-game-btn")

const p=document.createElement("p")




let prevGuess=[];

let numguess=1

let playGame=true


if(playGame){
    submitButton.addEventListener("click",function(e){
        e.preventDefault;

        const guess=parseInt(userInput.value);

        validateGuess(guess)

        // console.log(guess)
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Invalid Input!!!")
    }
    else if(100<guess || guess<1){
        alert("Please Enter the no. in given range!!!")
    }
    else{
        prevGuess.push(guess)
        if(numguess==11){
            displayGuess(guess)
            dispmessages(`Game Over. Random no. Was ${random}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }

    }
}

function checkGuess(guess){
    if(guess===random){
        dispmessages(`You Guessed It Right!!`)
        endGame()
    }
    else if(guess<random){
        dispmessages(`No. is Too low`)
    }
    else if(random<guess){
        dispmessages(`No. is Too High`)
    }

}

function displayGuess(guess){
    userInput.value=''
    gusses.innerHTML+=`${guess}  `
    numguess++
    remaining.innerHTML=`${11-numguess}`
    
}


function dispmessages(message){
    hint.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value=""
    userInput.setAttribute('disabled','')
    startNewButton.style.visibility= "visible"
    
    playGame=false

    newGame()

}

function newGame(){
    startNewButton.addEventListener("click",function(e){
        e.preventDefault


        // console.log(e)

        // console.log("Hello")

        random=parseInt(Math.random()*100+1);

        prevGuess=[]

        numguess=1

        userInput.removeAttribute('disabled')

        startNewButton.visibility="hidden"

        // remaining.innerHTML=

        gusses.innerHTML=''

        remaining.innerHTML=`${11-numguess}`

        playGame=true


    })
}

// let a=prompt("enter a no.");

// console.log('2'*2);