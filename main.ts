document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract values from the form
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;

    if (!nameElement || !contactElement || !educationElement || !skillsElement || !experienceElement) {
        console.error('One or more form elements are missing');
        return;
    }

    const name = nameElement.value;
    const contact = contactElement.value;
    const education = educationElement.value;
    const skills = skillsElement.value;
    const experience = experienceElement.value;

    // Log values for debugging
    console.log('Name:', name);
    console.log('Contact:', contact);
    console.log('Education:', education);
    console.log('Skills:', skills);
    console.log('Experience:', experience);

    // Update resume sections with form data
    const resumeName = document.getElementById('resumeName');
    const resumeContact = document.getElementById('resumeContact');
    const resumeEducation = document.getElementById('resumeEducation');
    const resumeSkills = document.getElementById('resumeSkills');
    const resumeExperience = document.getElementById('resumeExperience');

    if (resumeName) resumeName.textContent = name;
    if (resumeContact) resumeContact.textContent = contact;
    if (resumeEducation) resumeEducation.textContent = education;
    if (resumeSkills) resumeSkills.textContent = skills;
    if (resumeExperience) resumeExperience.textContent = experience;
});
