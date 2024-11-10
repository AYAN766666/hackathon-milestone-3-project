// app.ts

// Initialize the application when the page loads
window.onload = () => {
    const resumeForm = document.getElementById("resumeForm") as HTMLFormElement;
    
    // Listen for form submission to trigger resume generation
    resumeForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent page reload
        GenerateResume();       // Call function to generate resume
    });
};

// Generate the resume dynamically based on form input
function GenerateResume(): void {
    // Retrieve user input from the form fields
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const work = (document.getElementById("work") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;

    // Populate the resume with the user-provided data
    (document.getElementById("resumeName") as HTMLElement).innerText = `Name: ${name}`;
    (document.getElementById("resumeEmail") as HTMLElement).innerText = `Email: ${email}`;
    (document.getElementById("resumePhone") as HTMLElement).innerText = `Phone: ${phone}`;
    (document.getElementById("resumeEducation") as HTMLElement).innerText = `Education: ${education}`;
    (document.getElementById("resumeWork") as HTMLElement).innerText = `Work Experience: ${work}`;
    (document.getElementById("resumeSkills") as HTMLElement).innerText = `Skills: ${skills.split(',').map(skill => skill.trim()).join(', ')}`;

    // Display the resume section
    document.getElementById("resume")!.style.display = "block";
}

// Add a listener to save edited content back to the fields
const EditableFields = ["resumeName", "resumeEmail", "resumePhone", "resumeEducation", "resumeWork", "resumeSkills"];
editableFields.forEach(fieldId => {
    const element = document.getElementById(fieldId) as HTMLElement;
    element.addEventListener("input", () => {
        localStorage.setItem(fieldId, element.innerText);
    });
});

