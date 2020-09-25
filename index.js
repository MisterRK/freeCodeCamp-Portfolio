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

function animateHeadLine(){
   let counter = 0;
   let choices = ["Full Stack Developer", "Front End Developer", "Agile Developer"]
   setInterval(()=>{
      if(counter > 2){
         counter = 0
      }
      let headline = document.getElementById("headline")
      headline.innerText = choices[counter]
      // let oldTag = document.querySelectorAll(".headline")[counter-1]
      // let newTag = document.querySelectorAll(".headline")[counter]
      // oldTag === null || oldTag === undefined ? null : oldTag.classList = "headline is-hidden"
      // newTag.classList = "headline is-visible"
      counter++;
   }, 3000)
}

window.addEventListener("DOMContentLoaded", ()=> {
   animateHeadLine()
})