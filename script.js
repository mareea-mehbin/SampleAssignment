var firstName, lastName;

function submitFunction() {
    firstName = document.getElementById("first-name").value;
    lastName = document.getElementById("last-name").value;
    console.log(firstName, lastName);
    alert("Full Name: " + firstName + " " + lastName);
}