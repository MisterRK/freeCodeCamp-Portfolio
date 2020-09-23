function openNav() {
   document.getElementById("mySidenav").style.width = "45%";
   document.getElementById("hamburger").setAttribute('onClick', "closeNav()")
   animateHamburger();
}

function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
   document.getElementById("hamburger").setAttribute('onClick', "closeNav()")
}

function animateHamburger(){
   document.getElementById("hamburger").classList.toggle("change")
}