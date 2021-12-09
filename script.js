const body = document.querySelector("body");
const btn = document.querySelector("button");
const label = document.getElementById("name");
const principal = document.getElementById("principal");
const interest = document.getElementById("interest");
const time = document.getElementById("time");
const table = document.querySelector("#tableStorage");

let storage = [];
let amount;

for (let key in localStorage) {
    
}

function calculateInterest(){
    amount = principal.value * (1 + interest.value * time.value);
    amount = amount.toFixed(2);
    storage.push(label.value, principal.value, interest.value, time.value, amount);
    addData();
}

function addData() {
    const row = document.createElement("tr");
    row.setAttribute("id", `row-${label.value}`);
    let storageString = JSON.stringify(storage);
    localStorage.setItem(`row-${label.value}`, storageString);
    let storageArray = JSON.parse(localStorage.getItem(`row-${label.value}`));
    for (let i = 0; i < storageArray.length; i++) {
        let data = document.createElement("td");
        data.innerText = storageArray[i];
        row.appendChild(data);
    };
    
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("onclick", "{deleteData()}");
    deleteBtn.setAttribute("id", `btn-${label.value}`);
    deleteBtn.innerText = "Delete";
    row.appendChild(deleteBtn);
    let updateBtn = document.createElement("button");

    updateBtn.innerText = "Update";
    row.appendChild(updateBtn);

    table.appendChild(row);
    updateBtn.setAttribute("onclick", updateData);
    storage = [];
}

function deleteData() {
    // remove row from table
    table.removeChild(document.querySelector(`#row-${label.value}`));
    // remove item from localStorage
    localStorage.removeItem(`row-${label.value}`);
}

function updateData(){
    // let newPrincipal = prompt("Enter a new principal amount");
    // let newInterest = prompt("Enter a new interest rate");
    // let newTime = prompt("Enter a new amount of time");
}