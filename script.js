const body = document.querySelector("body");
const btn = document.querySelector("button");
const principal = document.getElementById("principal");
const interest = document.getElementById("interest");
const time = document.getElementById("time");
const amountText = document.createElement("p");

function calculateInterest(){
    let amount = principal.value * (1 + interest.value) ** time.value;
    
    amountText.innerText = amount;
    body.appendChild(amountText);
}


// btn.addEventListener("click", () => {
//     // event.preventDefault
//     calculateInterest(principal.value, interest.value, time.value);
//     body.appendChild(amountText);
// });

// A = P(1 + r) ** t