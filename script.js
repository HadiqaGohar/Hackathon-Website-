
 
 
 
 
 
 
 
 // JavaScript for handling profile picture upload and name display
 document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Update the navbar profile image
            const navbarProfileImage = document.getElementById('navbarProfileImage');
            navbarProfileImage.style.backgroundImage = `url(${e.target.result})`;
            navbarProfileImage.style.backgroundSize = 'cover'; // Ensure image covers the container

            // Update the home section profile image
            const homeProfileImage = document.getElementById('homeProfileImage');
            homeProfileImage.src = e.target.result; // Update src with the uploaded image
        };
        reader.readAsDataURL(file); // Convert file to base64
    }
});

// JavaScript for handling edit and save functionality
document.getElementById('editButton').addEventListener('click', function() {
    document.getElementById('nameInput').classList.remove('hidden');
    document.getElementById('subheaderInput').classList.remove('hidden');
    document.getElementById('descriptionInput').classList.remove('hidden');
    document.getElementById('nameDisplay').classList.add('hidden');
    document.getElementById('subheaderDisplay').classList.add('hidden');
    document.getElementById('descriptionDisplay').classList.add('hidden');
    document.getElementById('editButton').classList.add('hidden');
    document.getElementById('saveButton').classList.remove('hidden');
});

document.getElementById('saveButton').addEventListener('click', function() {
    document.getElementById('nameDisplay').textContent = document.getElementById('nameInput').value;
    document.getElementById('subheaderDisplay').textContent = document.getElementById('subheaderInput').value;
    document.getElementById('descriptionDisplay').textContent = document.getElementById('descriptionInput').value;

    document.getElementById('nameInput').classList.add('hidden');
    document.getElementById('subheaderInput').classList.add('hidden');
    document.getElementById('descriptionInput').classList.add('hidden');
    document.getElementById('nameDisplay').classList.remove('hidden');
    document.getElementById('subheaderDisplay').classList.remove('hidden');
    document.getElementById('descriptionDisplay').classList.remove('hidden');
    document.getElementById('editButton').classList.remove('hidden');
    document.getElementById('saveButton').classList.add('hidden');
});


// ABOUT SECTION..........


document.addEventListener('DOMContentLoaded', function () {
    const editAboutButton = document.getElementById('editAboutButton');
    const aboutEditContainer = document.getElementById('aboutEditContainer');
    const aboutTextContainer = document.getElementById('aboutTextContainer');
    const saveAboutButton = document.getElementById('saveAboutButton');
    const aboutHiInput = document.getElementById('aboutHiInput');
    const aboutNameInput = document.getElementById('aboutNameInput');
    const aboutDescriptionInput = document.getElementById('aboutDescriptionInput');
    const aboutImage = document.getElementById('aboutImage');
    const imageUpload = document.getElementById('imageUpload');

    editAboutButton.addEventListener('click', function () {
        aboutEditContainer.classList.toggle('hidden');
        aboutTextContainer.classList.toggle('hidden');
    });

    saveAboutButton.addEventListener('click', function () {
        const aboutHi = document.getElementById('aboutHi');
        const aboutName = document.getElementById('aboutName');
        const aboutDescription = document.getElementById('aboutDescription');

        aboutHi.textContent = aboutHiInput.value;
        aboutName.textContent = aboutNameInput.value;
        aboutDescription.textContent = aboutDescriptionInput.value;

        if (imageUpload.files.length > 0) {
            const file = imageUpload.files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                aboutImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        aboutEditContainer.classList.add('hidden');
        aboutTextContainer.classList.remove('hidden');
    });
});



// ......................................Education.............................................


document.addEventListener('DOMContentLoaded', () => {
    const editEducationButton = document.getElementById('editEducationButton');
    const saveEducationButton = document.getElementById('saveEducationButton');
    const educationTextContainer = document.getElementById('educationTextContainer');
    const educationEditContainer = document.getElementById('educationEditContainer');
    const educationImage = document.getElementById('educationImage');

    const degreeInputs = [
        document.getElementById('degree1Input'),
        document.getElementById('degree2Input'),
        document.getElementById('degree3Input')
    ];
    const schoolInputs = [
        document.getElementById('school1Input'),
        document.getElementById('college2Input'),
        document.getElementById('university3Input')
    ];
    const yearInputs = [
        document.getElementById('year1Input'),
        document.getElementById('year2Input'),
        document.getElementById('year3Input')
    ];
    const imageUrlInput = document.getElementById('image-url');

    // Toggle edit form visibility
    editEducationButton.addEventListener('click', () => {
        educationTextContainer.classList.toggle('hidden');
        educationEditContainer.classList.toggle('hidden');
    });

    // Save changes and update text content
    saveEducationButton.addEventListener('click', () => {
        const degrees = [
            document.getElementById('degree1'),
            document.getElementById('degree2'),
            document.getElementById('degree3')
        ];
        const schools = [
            document.getElementById('school1'),
            document.getElementById('school2'),
            document.getElementById('school3')
        ];
        const years = [
            document.getElementById('year1'),
            document.getElementById('year2'),
            document.getElementById('year3')
        ];

        // Update text content
        degrees.forEach((element, index) => {
            element.textContent = degreeInputs[index].value;
        });
        schools.forEach((element, index) => {
            element.textContent = schoolInputs[index].value;
        });
        years.forEach((element, index) => {
            element.textContent = yearInputs[index].value;
        });

        // Update image
        if (imageUrlInput.value) {
            educationImage.src = imageUrlInput.value;
        }

        // Hide edit form and show text content
        educationTextContainer.classList.remove('hidden');
        educationEditContainer.classList.add('hidden');
    });
});




// ...............................skills............................................



    document.getElementById('add-skill-btn').addEventListener('click', function() {
        const container = document.getElementById('skills-container');
        
        // Create a new skill input field
        const newSkillDiv = document.createElement('div');
        newSkillDiv.className = 'border rounded-lg p-4 shadow-lg text-blue-900 bg-white hover:text-white hover:bg-blue-900 transition-colors duration-300';
        
        const newSkillInput = document.createElement('input');
        newSkillInput.type = 'text';
        newSkillInput.value = 'New Skill'; // Default value
        newSkillInput.className = 'text-xl font-semibold w-full text-center bg-transparent border-none focus:outline-none';
        
        newSkillDiv.appendChild(newSkillInput);
        container.appendChild(newSkillDiv);
    });
    // Get DOM elements for the Skills section
const toggleSkillsButton = document.getElementById("toggleSkillsButton");
const skillsContainer = document.getElementById("skills-container");

// Toggle visibility of the Skills section
toggleSkillsButton.addEventListener("click", () => {
    if (skillsContainer.style.display === "none" || !skillsContainer.style.display) {
        skillsContainer.style.display = "grid"; // Show the skills container
        toggleSkillsButton.textContent = "Hide Skills"; // Update button text
    } else {
        skillsContainer.style.display = "none"; // Hide the skills container
        toggleSkillsButton.textContent = "Show Skills"; // Update button text
    }
});




  
// ........................work experieance................................



// Get DOM elements for the Work Experience section
const editWorkButton = document.getElementById("editWorkButton");
const saveWorkButton = document.getElementById("saveWorkButton");
const jobTitleDisplay = document.getElementById("jobTitle");
const companyNameDisplay = document.getElementById("companyName");
const jobDescriptionDisplay = document.getElementById("jobDescription");
const jobTitleInput = document.getElementById("jobTitleInput");
const companyNameInput = document.getElementById("companyNameInput");
const jobDescriptionInput = document.getElementById("jobDescriptionInput");

// Toggle Edit and Save for Work Experience
editWorkButton.addEventListener("click", () => {
    jobTitleInput.classList.toggle("hidden");
    companyNameInput.classList.toggle("hidden");
    jobDescriptionInput.classList.toggle("hidden");
    jobTitleDisplay.classList.toggle("hidden");
    companyNameDisplay.classList.toggle("hidden");
    jobDescriptionDisplay.classList.toggle("hidden");
    saveWorkButton.classList.toggle("hidden");
    editWorkButton.classList.toggle("hidden");
});

saveWorkButton.addEventListener("click", () => {
    jobTitleDisplay.textContent = jobTitleInput.value || "Enter Job Title";
    companyNameDisplay.textContent = companyNameInput.value || "Enter Company Name";
    jobDescriptionDisplay.textContent = jobDescriptionInput.value || "Enter Job Description";
    
    jobTitleInput.classList.toggle("hidden");
    companyNameInput.classList.toggle("hidden");
    jobDescriptionInput.classList.toggle("hidden");
    jobTitleDisplay.classList.toggle("hidden");
    companyNameDisplay.classList.toggle("hidden");
    jobDescriptionDisplay.classList.toggle("hidden");
    saveWorkButton.classList.toggle("hidden");
    editWorkButton.classList.toggle("hidden");
});

   


