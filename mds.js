window.mds = {
    textField: textField,
    switch: noop,
    checkbox: noop,
    radioButton: noop,
};

//================FUNCTION: textField(): Moves the pre-existing label-text out of the way when the textfield is active==============//
function textField(element) {
    let input = element.querySelector(".mds-text-field__input");
    let label = element.querySelector(".mds-text-field__label");

    input.addEventListener("focus", function(e){
        
        if(input){
            label.classList.remove("mds-text-field__label");
            label.classList.add("mds-text-field__label--active");

        } 

    })

    input.addEventListener("blur", function() {
        
        if (input.value === "") {
            label.classList.remove("mds-text-field__label--active");
            label.classList.add("mds-text-field__label");
        }
    })
}

function noop(){

}