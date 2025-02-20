let currDate = document.getElementById("currDate");
let dateOfBirth = document.querySelector("#userAge");
const calcAge = document.getElementById("CalcAge");
const displayAge = document.getElementById("displayAge");
const ageElement = document.getElementById("age");
let today = new Date();
const resetButton = document.getElementById("reset");


currDate.innerHTML = `<center>Aujourd'hui nous sommes le : ${today.toLocaleDateString('fr-FR')}</center>`;

calcAge.addEventListener("click", () => {
    const birthDateString = dateOfBirth.value;

    if (!birthDateString) {
        alert("Veuillez entrer une date de naissance.");
        return; // 
    }
    const birthDate = new Date(birthDateString);

    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    displayAge.style.visibility = "visible";
    ageElement.innerHTML = `Vous avez ${age} ans.`;
});

function resetAll() {
    location.reload();
}