// app.ts
// Initialize the application when the page loads
window.onload = function () {
    var resumeForm = document.getElementById("resumeForm");
    // Listen for form submission to trigger resume generation
    resumeForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        generateResume(); // Call function to generate resume
    });
};
// Generate the resume dynamically based on form input
function generateResume() {
    // Retrieve user input from the form fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var work = document.getElementById("work").value;
    var skills = document.getElementById("skills").value;
    // Populate the resume with the user-provided data
    document.getElementById("resumeName").innerText = "Name: ".concat(name);
    document.getElementById("resumeEmail").innerText = "Email: ".concat(email);
    document.getElementById("resumePhone").innerText = "Phone: ".concat(phone);
    document.getElementById("resumeEducation").innerText = "Education: ".concat(education);
    document.getElementById("resumeWork").innerText = "Work Experience: ".concat(work);
    document.getElementById("resumeSkills").innerText = "Skills: ".concat(skills.split(',').map(function (skill) { return skill.trim(); }).join(', '));
    // Display the resume section
    document.getElementById("resume").style.display = "block";
}
// Add a listener to save edited content back to the fields
var editableFields = ["resumeName", "resumeEmail", "resumePhone", "resumeEducation", "resumeWork", "resumeSkills"];
editableFields.forEach(function (fieldId) {
    var element = document.getElementById(fieldId);
    element.addEventListener("input", function () {
        localStorage.setItem(fieldId, element.innerText);
    });
});
