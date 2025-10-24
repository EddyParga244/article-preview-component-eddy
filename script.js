const button = document.querySelector(".share-circle");
const share = document.querySelector(".share");
const socials = document.querySelector(".socials");

button.addEventListener("click", function(){
    button.classList.toggle("active");
    share.classList.toggle("active");
    socials.classList.toggle("active");
});