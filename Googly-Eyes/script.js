// let start=-100;


// let range=200;

// const eye=document.querySelector(".face")





// eye.addEventListener("click",(e)=>{
//     console.log(`Position of X ${e.clientX}`)
// })
 
// chat gpt added things

const leftEye = document.querySelector('#left-eye');
const rightEye = document.querySelector('#right-eye');
const leftPupil = document.querySelector('#left-pupil');
const rightPupil = document.querySelector('#right-pupil');

    // Function to calculate pupil movement for an eye
function movePupil(eye, pupil, mouseX, mouseY) {
const eyeRect = eye.getBoundingClientRect();
const eyeCenterX = eyeRect.left + eyeRect.width /2 ;
const eyeCenterY = eyeRect.top + eyeRect.height/2;

const deltaX = mouseX - eyeCenterX;
const deltaY = mouseY - eyeCenterY;
      
const distance = Math.min(Math.sqrt(deltaX * deltaX + deltaY * deltaY), 60);  // Limit pupil movement
const angle = Math.atan2(deltaY, deltaX);
      
const offsetX = distance * Math.cos(angle);
const offsetY = distance * Math.sin(angle);

pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

}

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

        // Move both pupils based on the mouse position
    movePupil(leftEye, leftPupil, mouseX, mouseY);
    movePupil(rightEye, rightPupil, mouseX, mouseY);
});



