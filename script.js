let disableButton = document.querySelector("#disableButton");
let enableButton = document.querySelector("#enableButton");

disableButton.addEventListener("click", disableAll);
enableButton.addEventListener("click", enableAll);

function disableAll() {
    document.querySelector(".mds-text-field__input").disabled = true;
    document.querySelector(".mds-switch__checkbox").disabled = true;
    document.querySelector(".mds-checkbox__input").disabled = true;

    let radioButtons = document.querySelectorAll(".mds-radio__input");
    for (let buttons of radioButtons){
        buttons.setAttribute("disabled", true);
    }   
}

function enableAll() {
    document.querySelector(".mds-text-field__input").disabled = false;
    document.querySelector(".mds-switch__checkbox").disabled = false;
    document.querySelector(".mds-checkbox__input").disabled = false;

    let radioButtons = document.querySelectorAll(".mds-radio__input");
    for (let buttons of radioButtons){
        buttons.removeAttribute("disabled");
    }
}