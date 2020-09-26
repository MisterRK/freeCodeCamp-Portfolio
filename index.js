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

function changeHeadLine(){
   let counter = 0;
   let choices = ["Full Stack Developer", "Agile Developer", "Front End Developer"]
   let animation = setInterval(()=>{
      if(counter > 2){
         counter = 0
      }
      let headline = document.getElementById("headline")
      removeHeadline();
      headline.innerText = choices[counter]
      // addHeadline()
      counter++;
   }, 3000)
}

function addHeadline(string){ // the string is the new headline we want to display
   let headlineText = document.getElementById("headline").innerText // empty string
   let counter = 0
   console.log(headlineText)
}

function removeHeadline(nextString){
   // console.log("🔫")
   let headlineText = document.getElementById("headline").innerText // str of headline text
   // console.log("rat")
   let removing = setInterval((id) => {
      // console.log("tat")
      if(headlineText.length !== 0){
         headlineText = headlineText.substring(0, headlineText.length -1)
         document.getElementById("headline").innerText = headlineText
      } else {
         clearInterval(removing);
      }
   }, 100);
}

window.addEventListener("DOMContentLoaded", ()=> {
   changeHeadLine()
})