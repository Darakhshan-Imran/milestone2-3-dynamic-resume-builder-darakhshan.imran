var _a;
(_a = document.getElementById('dynamic-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type Assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var urlElement = document.getElementById('url');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    // Apply condition
    if (nameElement && emailElement && contactElement && urlElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var url = urlElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        // resume output
        var resume_output = " \n        <h1>Resume</h1>\n        <p><strong>Name:</strong>".concat(name_1, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Contact Number:</strong> ").concat(contact, "</p>\n        <p><strong>Linkedin:</strong> ").concat(url, "</p>\n        \n        <h1>Education</h1>\n        <p>").concat(education, "</p>\n        <h1>Work Experience</h1>\n        <p>").concat(experience, "</p>\n        <h1>Skills</h1>\n        <p>").concat(skills, "</p>");
        var resumeOutputElement = document.getElementById('resumeoutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resume_output;
        }
        else {
            console.error('The output element is missing');
        }
    }
    else {
        console.error('More than output elements are missing');
    }
});
