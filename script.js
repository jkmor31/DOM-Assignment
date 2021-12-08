const body = document.querySelector("body");
const btn = document.querySelector("button");
const principal = document.getElementById("principal");
const interest = document.getElementById("interest");
const time = document.getElementById("time");
let amountText = document.createElement("p");
let amount = 0;
let itemInStorage = localStorage.getItem("sprint-demo");
if (itemInStorage) {
    amount = itemInStorage;
    amountText.innerText = `Your total balance will be: $${amount}`;
    body.appendChild(amountText);
}

function calculateInterest(){
    amount = principal.value * (1 + interest.value * time.value);
    amount = amount.toFixed(2);
    amountText.innerText = `Your total balance will be: $${amount}`;
    localStorage.setItem("sprint-demo", amount);
    body.appendChild(amountText);
}

function clearInterest() {
    if (itemInStorage) {
        localStorage.removeItem("sprint-demo");
        amountText.innerText = "";
    }
}


// btn.addEventListener("click", () => {
//     // event.preventDefault
//     calculateInterest(principal.value, interest.value, time.value);
//     body.appendChild(amountText);
// });

// A = P(1 + r) ** t