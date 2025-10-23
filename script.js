let button = document.querySelector(".share-circle");
let share = document.querySelector(".share");
let socials = document.querySelector(".socials");

button.addEventListener("click", function(){
    button.classList.toggle("active");
    share.classList.toggle("active");
    socials.classList.toggle("active");
});