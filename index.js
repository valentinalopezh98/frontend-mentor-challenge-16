const numberButtons = document.getElementsByClassName("number");
const btnSubmit = document.getElementById("submit");
const ratingContainer = document.getElementById("rating-state");
const thankyouContainer = document.getElementById("thank-you-state");
const selectedRate = document.getElementById("selected-rate");
let numberClicked = false;
let selectedButton;

const buttonClicked = (i) =>{
    for (let index = 0; index < numberButtons.length; index++) {
        numberButtons[index].classList.remove("clicked");
    }
    numberButtons[i].classList.add("clicked");
    selectedButton = numberButtons[i];
    numberClicked = true;
}

const submitRate = () => {
    if(numberClicked){
        ratingContainer.classList.add("hidden");
        thankyouContainer.classList.remove("hidden");
        selectedRate.innerHTML= `
        <p>You selected ${selectedButton.innerHTML} out of 5</p>`
    }
}

const init = () =>{
    btnSubmit.addEventListener("click",submitRate);
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener("click", () => {
            buttonClicked(i);
        });
    }
}

init();