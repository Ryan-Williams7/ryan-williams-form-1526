let form = document.querySelector("form");
let fn = document.getElementById("fullname");
let em = document.getElementById("email");
let msg = document.getElementById("message");

let btn = document.getElementById("submit-button");


function validateForm() {
    
    console.clear();
    
    let collectedData = {};
    let errors = [];
    
    if (fn.value !== "") {
        collectedData.fullname = fn.value;
    } else {
        errors.push("Full name is missing");
    }
    
    if (em.value !== "") {
        collectedData.email = em.value;
    } else {
        errors.push("Email is missing");
    }
     
    if (msg.value !== "") {
        collectedData.message = msg.value;
    } else {
        errors.push("Message is missing");
    }
    

    if (errors.length === 0) {
        console.log(collectedData);
        form.reset();
    } else {
        console.log(errors);
    }   
}

btn.addEventListener("click", validateForm);
