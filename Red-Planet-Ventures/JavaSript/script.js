//Search
function search(event) {
    event.preventDefault();

    let formData = {
        "search": this.name.value,
    }

    carlog.push(formData);
}


//Redirect
function redirectFlights() {   
    href = "Pages/flights.html";
}


//Book Now button
let bookNOW = document.getElementById("bookNOW");

bookNOW.addEventListener("bookNOW", function() {
    alert("Flight/s Booked");
});


//Mars
function decreaseMars(){
    if (document.getElementById('ticketsMars').value != 0){
        document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) - 1;
    } else {
        document.getElementById('ticketsMars').value = 0;
    }
}

function increaseMars(){
    document.getElementById('ticketsMars').value = parseInt(document.getElementById('ticketsMars').value) + 1;
}


//Neptune
function decreaseNeptune(){
    if (document.getElementById('ticketsNeptune').value != 0){
        document.getElementById('ticketsNeptune').value = parseInt(document.getElementById('ticketsNeptune').value) - 1;
    } else {
        document.getElementById('ticketsNeptune').value = 0;
    }
}

function increaseNeptune(){
    document.getElementById('ticketsNeptune').value = parseInt(document.getElementById('ticketsNeptune').value) + 1;
}


//Jupiter
function decreaseJupiter(){
    if (document.getElementById('ticketsJupiter').value != 0){
        document.getElementById('ticketsJupiter').value = parseInt(document.getElementById('ticketsJupiter').value) - 1;
    } else {
        document.getElementById('ticketsJupiter').value = 0;
    }
}

function increaseJupiter(){
    document.getElementById('ticketsJupiter').value = parseInt(document.getElementById('ticketsJupiter').value) + 1;
}


//Saturn
function decreaseSaturn(){
    if (document.getElementById('ticketsSaturn').value != 0){
        document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) - 1;
    } else {
        document.getElementById('ticketsSaturn').value = 0;
    }
}

function increaseSaturn(){
    document.getElementById('ticketsSaturn').value = parseInt(document.getElementById('ticketsSaturn').value) + 1;
}


//Uranus
function decreaseUranus(){
    if (document.getElementById('ticketsUranus').value != 0){
        document.getElementById('ticketsUranus').value = parseInt(document.getElementById('ticketsUranus').value) - 1;
    } else {
        document.getElementById('ticketsUranus').value = 0;
    }
}

function increaseUranus(){
    document.getElementById('ticketsUranus').value = parseInt(document.getElementById('ticketsUranus').value) + 1;
}


//Moon
function decreaseMoon(){
    if (document.getElementById('ticketsMoon').value != 0){
        document.getElementById('ticketsMoon').value = parseInt(document.getElementById('ticketsMoon').value) - 1;
    } else {
        document.getElementById('ticketsMoon').value = 0;
    }
}

function increaseMoon(){
    document.getElementById('ticketsMoon').value = parseInt(document.getElementById('ticketsMoon').value) + 1;
}

//Calculating Total
let totalMarsCost = 0;
let totalNeptuneCost = 0;
let totalJupiterCost = 0;
let totalSaturnCost = 0;
let totalUranusCost = 0;
let totalMoonCost = 0;
let totalCost = 0;

function total(){
    totalMarsCost = parseInt(document.getElementById('ticketsMars').value) * 25000;

    totalNeptuneCost = parseInt(document.getElementById('ticketsNeptune').value) * 45000;

    totalJupiterCost = parseInt(document.getElementById('ticketsJupiter').value) * 65000;

    totalSaturnCost = parseInt(document.getElementById('ticketsSaturn').value) * 40000;

    totalUranusCost = parseInt(document.getElementById('ticketsUranus').value) * 50000;

    totalMoonCost = parseInt(document.getElementById('ticketsMoon').value) * 15000;

    totalCost = totalMarsCost + totalSaturnCost;
    document.getElementById('total').innerHTML = "R " + totalCost;
}

//View Cart
function cartView() {
    console.log(" ");   
    console.log("Mars: " + totalMarsCost);
    console.log(" ");
    console.log("Neptune: " + totalNeptuneCost);
    console.log(" ");
    console.log("Jupiter: " + totalJupiterCost);
    console.log(" ");
    console.log("Saturn: " + totalSaturnCost);
    console.log(" ");
    console.log("Uranus: " + totalUranusCost);
    console.log(" ");
    console.log("Moon: " + totalMoonCost);
    console.log(" ");
    console.log(" ");
    console.log("Total Cost: " + totalCost);
}

//Contact form
let form = document.forms["contact"];
form.addEventListener("submit", getContact);

let carlog = [];

function getContact(event){
    event.preventDefault();

    let formData = {
        "name": this.name.value,
        "email": this.email.value,
        "subject": this.subject.value,
        "message": this.message.value,
    }

    let out = `
        <p>Name: <span>${formData.name}</span></p>
        <p>Make: <span>${formData.email}</span></p>
        <p>Model: <span>${formData.subject}</span></p>
        <p>Registration: <span>${formData.message}</span></p>
    `
}