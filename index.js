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