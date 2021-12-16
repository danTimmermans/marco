let contact = document.querySelector(".link");
let myForm = document.querySelector(".contact");
let myCross = document.querySelector(".cross");

contact.addEventListener("click", () =>{
    myForm.classList.toggle("active");

});
myCross.addEventListener("click",() =>{
    myForm.classList.toggle("active");
})