let registrants = [];
let virtual = 0;
let inperson = 0;

document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let company = document.getElementById("company").value.trim();

    let attendance = document.querySelector('input[name="attendance"]:checked');

    let valid = true;

    // Name validation
    if(name.length < 6 || name.length > 100){
        document.getElementById("nameError").innerText =
        "Name must be between 6 and 100 characters.";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    // Email validation
    if(!email.includes("@") || !email.includes(".")){
        document.getElementById("emailError").innerText =
        "Please enter a valid professional email address.";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Company validation
    if(company.length > 100){
        document.getElementById("companyError").innerText =
        "Company name cannot exceed 100 characters.";
        valid = false;
    } else {
        document.getElementById("companyError").innerText = "";
    }

    // Attendance validation
    if(!attendance){
        document.getElementById("attendanceError").innerText =
        "Please select your attendance type.";
        valid = false;
    } else {
        document.getElementById("attendanceError").innerText = "";
    }

    if(valid){

        registrants.push(name);

        if(attendance.value === "Virtual"){
            virtual++;
        }else{
            inperson++;
        }

        alert("Registration Successful!");

        document.getElementById("registrationForm").reset();
    }

});


let btn = document.getElementById("analyticsBtn");

btn.addEventListener("click", function(){

    let panel = document.getElementById("analyticsPanel");

    if(panel.style.display === "none"){

        panel.style.display = "block";

        document.getElementById("totalRegistrants").innerText =
        "Total Registrants: " + registrants.length;

        document.getElementById("virtualCount").innerText =
        "Virtual: " + virtual;

        document.getElementById("inpersonCount").innerText =
        "In-Person: " + inperson;

        btn.innerText = "Hide Event Analytics";

    } else {

        panel.style.display = "none";
        btn.innerText = "Show Event Analytics";

    }

});