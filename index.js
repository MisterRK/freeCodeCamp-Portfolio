function openNav() {
   document.getElementById("navbar").style.width = "250px";
   document.getElementById("hamburger").setAttribute('onClick', "closeNav()")
}

function closeNav() {
   document.getElementById("navbar").style.width = "0";
   document.getElementById("hamburger").setAttribute('onClick', "openNav()")
}

function animateHamburger(){
   document.getElementById("hamburger").classList.toggle("change")
}

function animateHeadline() {
   let counter = 0;
   let choices = ["I'm a Full Stack Developer", "I'm an Agile Developer", "I'm a Front End Developer"];
   let animation = setInterval(() => {
      if(counter > 2) {
         counter = 0
      }
      let headline = document.getElementById("headline");
      let newText = choices[counter];
      console.log("🔫")
      adding(newText)
      counter++
      setTimeout(()=>{
         headline.innerHTML = ""
      }, 2500)

   }, 2000);
}

function adding(string){
   console.log("📣")
   let i = 0;
   let speed = 40;

   function typeWriter(){
      if(i < string.length) {
         document.getElementById("headline").innerHTML += string.charAt(i);
         i++
         setTimeout(typeWriter, speed);
      }
   }
   typeWriter()
}

function removing(string){
   console.log("🛠")
   let i = string.length - 1;
   let speed = 25;

   function removeText(){
      if(i > 0){
         document.getElementById("headline").innerHTML -= string.charAt(i);
         i--;
         setTimeout(removeText, speed)
      }
   }
   removeText()
}


// function removing(){
//    let headlineText = document.getElementById("headline").innerText // str of current text
//    for(let i = headlineText.length - 1; i > 0; i--){
//       headlineText -= headlineText.charAt(i)
//       setTimeout(removing, 75);
//    }
// }

// function changeHeadLine(){
//    let counter = 0;
//    let choices = ["Full Stack Developer", "Agile Developer", "Front End Developer"]
//    let animation = setInterval(()=>{
//       if(counter > 2){
//          counter = 0
//       }
//       let headline = document.getElementById("headline")
//       headlineAnimation(choices[counter])
//       // headline.innerText = choices[counter]
//       // addHeadline()
//       counter++;
//    }, 3000)
// }

// function headlineAnimation(nextString){ // incoming string will be what we want to add
//    let headlineText = document.getElementById("headline").innerText
//    let removing = setInterval(removeHeadline, 100);

//    function removeHeadline(nextString) {
//       if(headlineText.length !== 0){
//          headlineText = headlineText.substring(0, headlineText.length -1)
//          document.getElementById("headline").innerText = headlineText
//       } else {
//          clearInterval(removing);
//          let string = ""


//          let adding = setInterval((nextString)=>{
//             let counter = 0;
//             if(string === nextString) {
//                console.log("cleaned up adding")
//                clearInterval(adding)
//             } else {
//                string.concat(nextString[counter]);
//                counter++;
//                headlineText = string
//             }
//          }, 100);
//       }
//    }


// }
// function addHeadline(string){ // the string is the new headline we want to display
//    let headlineText = document.getElementById("headline").innerText // empty string
//    let counter = 0
//    console.log(headlineText)
// }

// function removeHeadline(nextString){
//    // console.log("🔫")
//    let headlineText = document.getElementById("headline").innerText // str of headline text
//    // console.log("rat")
//    let removing = setInterval((id) => {
//       // console.log("tat")
//       if(headlineText.length !== 0){
//          headlineText = headlineText.substring(0, headlineText.length -1)
//          document.getElementById("headline").innerText = headlineText
//       } else {
//          clearInterval(removing);
//          let adding = setInterval(addHeadline(nextString), 100);
//       }
//    }, 100);
// }

window.addEventListener("DOMContentLoaded", ()=> {
   animateHeadline()
})