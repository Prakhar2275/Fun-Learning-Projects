let simpleBtn=document.querySelector("#one")
let hexBtn=document.querySelector("#two")
let simple=document.querySelector("#defined")
let hex=document.querySelector("#random")
let mainBtns=document.querySelector("#mainbtns");
// let mainBtnr=document.querySelector("mainbtnr");
let simpleValue=document.querySelector("#simple-value")


hexBtn.addEventListener("click",()=>{
    hex.style.visibility="visible";
    simple.style.visibility="hidden";
    hexBtn.style.backgroundColor="white"
    hexBtn.style.color="black"
    simpleBtn.style.backgroundColor="black"
    simpleBtn.style.color="white"
    

    hexBtn.classList.add("click")
    setTimeout(()=>{
        hexBtn.classList.remove("click")
    },250)

})

simpleBtn.addEventListener("click",()=>{
    simple.style.visibility="visible";
    hex.style.visibility="hidden";


    hexBtn.style.backgroundColor="black"
    hexBtn.style.color="white"
    simpleBtn.style.backgroundColor="white"
    simpleBtn.style.color="black"

    simpleBtn.classList.add("click")
    setTimeout(()=>{
        simpleBtn.classList.remove("click")
    },250)

    
})


// for simple color changement

const main=["whitesmoke","pink","green","blue","yellow","wheat","brown"]

function getRandomNumber() {
    return Math.floor(Math.random() * main.length); // Math.random() * 5 gives a range from 0 to 4
}

mainBtns.addEventListener("click",()=>{
    let number=getRandomNumber();
    simple.style.backgroundColor=`${main[number]}`
    simpleValue.innerHTML=`${main[number]}`
    // console.log(number);
    // alert("hello");
    mainBtns.classList.add("click")
    setTimeout(()=>{
        mainBtns.classList.remove("click")
    },250)


})



// for second


let mainButton = document.querySelector("#main");
// let colorDisplay = document.querySelector("#random");
let hexValue = document.querySelector("#hex-value");

const hexChars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];

function getRandomHex() {
    return Math.floor(Math.random() * 16); // Generates a number between 0 and 15
}



// console.log(colorCode);



mainButton.addEventListener("click", () => {
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
        colorCode += hexChars[getRandomHex()];
    }
    // console.log("Hello")

    hex.style.backgroundColor = colorCode; 
    hexValue.innerHTML = colorCode;
    mainButton.classList.add("click")
    setTimeout(()=>{
        mainButton.classList.remove("click")
    },250)
    // mainButton.style.color = "red";
})
