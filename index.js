let slider = document.querySelector(".slider");
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");

});
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");

});