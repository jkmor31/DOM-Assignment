const body = document.querySelector("body");
const btn = document.querySelector("button");
const label = document.getElementById("name");
const principal = document.getElementById("principal");
const interest = document.getElementById("interest");
const time = document.getElementById("time");
const table = document.querySelector("#tableStorage");

let storage = [];
let amount;

//Find previous entries in localStorage on first load
for (let key in localStorage) {
    let storedArray = localStorage.getItem(key);
    if (storedArray) {
        storedArray = JSON.parse(storedArray);
        let row = document.createElement("tr");
        row.setAttribute("id", `row-${storedArray[0]}`);
        for (let i = 0; i < storedArray.length; i++) {
            let data = document.createElement("td");
            data.innerText = storedArray[i];
            row.appendChild(data);
        };
        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("onclick", "{deleteData()}");
        deleteBtn.setAttribute("class", `${storedArray[0]}`);
        deleteBtn.innerText = "Delete";
        row.appendChild(deleteBtn);
        let updateBtn = document.createElement("button");
        updateBtn.setAttribute("onclick", "{updateData()}");
        updateBtn.setAttribute("class", `${storedArray[0]}`);
        updateBtn.innerText = "Update";
        row.appendChild(updateBtn);
        table.appendChild(row);
    }
}

//calculates total amount before adding to localStorage
function calculateInterest() {
    if (/\s/.test(label.value) || !label.value || !principal.value || !interest.value || !time.value) {
        alert("Please fill out all numeric fields with numbers and text fields with no whitespace.");
    } else {
        amount = principal.value * (1 + interest.value * time.value);
        amount = amount.toFixed(2);
        storage.push(label.value, "$" + principal.value, interest.value, time.value, "$" + amount);
        addData();
    }
}

//adds the new entry to localStorage and to HTML table
function addData() {
    let row = document.createElement("tr");
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
    deleteBtn.setAttribute("class", `${storageArray[0]}`);
    deleteBtn.innerText = "Delete";
    row.appendChild(deleteBtn);
    let updateBtn = document.createElement("button");

    updateBtn.innerText = "Update";
    updateBtn.setAttribute("class", `${storageArray[0]}`);
    row.appendChild(updateBtn);

    table.appendChild(row);
    updateBtn.setAttribute("onclick", "{updateData()}");
    storage = [];
}

//deletes selected entry from localStorage and HTML table
function deleteData() {
    let rowToDelete = event.target.getAttribute("class");
    table.removeChild(document.querySelector(`#row-${rowToDelete}`));
    localStorage.removeItem(`row-${rowToDelete}`);
}

//updates selected entry to localStorage and HTML table
function updateData() {
    let rowToUpdate = event.target.getAttribute("class");

    let newPrincipal = prompt("Enter a new principal amount");
    let newInterest = prompt("Enter a new interest rate");
    let newTime = prompt("Enter a new amount of time");
    if (!newPrincipal || !newInterest || !newTime) {
        alert("Please provide only numbers.");
    } else {
        table.removeChild(document.querySelector(`#row-${rowToUpdate}`));
        let newAmount = newPrincipal * (1 + newInterest * newTime);
        let newArray = [rowToUpdate, "$" + newPrincipal, newInterest, newTime, "$" + newAmount];

        localStorage.setItem(`row-${rowToUpdate}`, JSON.stringify(newArray));

        let row = document.createElement("tr");
        row.setAttribute("id", `row-${rowToUpdate}`);
        for (let i = 0; i < newArray.length; i++) {
            let data = document.createElement("td");
            data.innerText = newArray[i];
            row.appendChild(data);
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute("onclick", "{deleteData()}");
        deleteBtn.setAttribute("class", `${newArray[0]}`);
        deleteBtn.innerText = "Delete";
        row.appendChild(deleteBtn);
        let updateBtn = document.createElement("button");

        updateBtn.innerText = "Update";
        updateBtn.setAttribute("class", `${newArray[0]}`);
        row.appendChild(updateBtn);

        table.appendChild(row);
    }
}