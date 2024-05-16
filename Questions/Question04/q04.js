let formContainer = document.getElementById("form-container");
let formContent = document.getElementById("form-content");
let formInfoContainer = document.getElementById("info-container");
// console.log(formInfoContainer);
// console.log(form);
let userName;
let gender;
let address;
let education;
let profession;

function CitizenInfo(userName, gender, address, education, profession) {
    this.Name = userName,
        this.Gender = gender,
        this.HomeAddress = address,
        this.Education = education,
        this.Profession = profession
}

let nameInput = document.getElementById("name-input");
let addressInput = document.getElementById("address-input");
let professionInput = document.getElementById("profession-input");
let genderInput = document.getElementById("gender-input");
let educationInput = document.getElementById("education-input");

function catchGender(elementGender) {
    gender = elementGender.value
}

function catchEducation(elementEducation) {
    education = elementEducation.value
}

function submitValues() {
    userName = nameInput.value;
    address = addressInput.value;
    profession = professionInput.value;
    console.log(userName, gender, address, profession, education);

    formContent.style.display = "none";
    formInfoContainer.style.display = "flex";

    let formHeading = document.getElementById("form-heading");
    formHeading.innerText = "Printing User Entered Details in Browser"

    
    var user1 = new CitizenInfo(userName, gender, address, education, profession);
    console.log(user1);
    formInfoContainer.innerHTML =  `
        <span>FullName :<strong> ${user1.Name} </strong></span>
        <span>Address :<strong> ${user1.HomeAddress}</strong> </span>
        <span>Profession :<strong> ${user1.Profession}</strong></span>
        <span>Gender :<strong> ${user1.Gender}</strong></span>
        <span>Education :<strong> ${user1.Education}</strong></span>`
}


