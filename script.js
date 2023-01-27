//navbar2 show and hide
var mainNavbar = document.getElementById("navbar");
var secondaryNavbar = document.getElementById("navbar2");

var prevScrollPosition = window.pageYOffset;

window.onscroll = function() {
    var curScrollPosition = window.pageYOffset;

    if(prevScrollPosition < curScrollPosition &&  mainNavbar.getBoundingClientRect().top <= 0)
    { 
        secondaryNavbar.style.display = "none";

    } else if(curScrollPosition === 0) {
        secondaryNavbar.style.display = "flex";
        secondaryNavbar.style.alignItems = "center";
        secondaryNavbar.style.justifyContent = "center";
    }
    else {
        secondaryNavbar.style.display = "none";
    }
    prevScrollPosition = curScrollPosition;
}
//cars image at the bottom
const background = document.getElementById("background");
function mouseOn(x){
background.style.backgroundImage = "url(https://www.mercedes-benz.com/en/vehicles/mercedes-benz-classic/classiccenter/_jcr_content/root/imagejumper_10503641/parsys/imagejumperitem/image/MQ7-0-image-20211118123015/09-mercedes-benz-classic-centerfellbach-3400x1912.jpeg;)";
}
function mouseOut(x){
    background.style.backgroundImage = "url(https://www.mercedes-benz.com/en/vehicles/mercedes-benz-classic/classiccenter/_jcr_content/root/imagejumper_10503641/image/MQ7-0-image-20211118122902/08-mercedes-benz-classic-centerfellbach-3400x1912.jpeg;)";
}
const logo = document.getElementById("log");
logo.onclick = function hoverLogo(x){
    logo.className = "hover";
}
logo.addEventListener('animationend', () => {
    logo.className = "before-hover";
});
//animation:
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else{
            entry.target.classList.remove("show");
        }
    })
} )
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
//const buttons = document.querySelectorAll('[data-popup-target]');
//buttons.forEach(button => {S
   // button.addEventListener('click', event => {
   //     const target = document.querySelector(event.target.dataset.popup);
     //   target.style.display = "block";
   // });
//});
//const closeButton = document.querySelector('.close-button');
//closeButton.addEventListener("click", () => {
  //var popup = document.getElementById("popup1");
  //popup.style.display = "none";
//});