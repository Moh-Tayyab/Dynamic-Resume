"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    const generateResumeButton = document.getElementById('generate-resume');
    const generatedResumeDiv = document.getElementById('generated-resume');
    const resumeActionsDiv = document.getElementById('resume-actions');
    const fileInput = document.getElementById('profile-picture');
    const previewImage = document.getElementById('preview');
    function handleFileSelect(event) {
        const target = event.target;
        const files = target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = function (e) {
                if (e.target && e.target.result) {
                    previewImage.src = e.target.result;
                    previewImage.style.display = 'block';
                }
            };
            reader.readAsDataURL(file);
        }
        else {
            previewImage.src = '';
            previewImage.style.display = 'none';
        }
    }
    fileInput.addEventListener('change', handleFileSelect);
    generateResumeButton.addEventListener('click', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const resumeData = {};
        formData.forEach((value, key) => {
            resumeData[key] = value.toString();
        });
        const profilePicture = previewImage.src ? previewImage.src : resumeData['profile-picture'];
        const generatedResume = `
      <h1>${resumeData.name}</h1>
      <img src="${profilePicture}" alt="Profile Picture">
      <ul>
        <li>GitHub: <a href="${resumeData.github}">${resumeData.github}</a></li>
        <li>Vercel: <a href="${resumeData.vercel}">${resumeData.vercel}</a></li>
        <li>npm: <a href="${resumeData.npm}">${resumeData.npm}</a></li>
      </ul>
      <h2>Contact</h2>
      <ul>
        <li>Email: ${resumeData.email}</li>
        <li>Phone: ${resumeData.phone}</li>
        <li>LinkedIn: <a href="${resumeData.linkedin}">${resumeData.linkedin}</a></li>
      </ul>
      <h2>Personal Details</h2>
      <ul>
        <li>Live in: ${resumeData['live-in']}</li>
        <li>From: ${resumeData.from}</li>
        <li>Date of Birth: ${resumeData['date-of-birth']}</li>
        <li>Gender: ${resumeData.gender}</li>
        <li>Nationality: ${resumeData.nationality}</li>
        <li>Hobbies: ${resumeData.hobbies}</li>
        <li>Languages: ${resumeData.languages}</li>
      </ul>
      <h2>Objective</h2>
      <p>${resumeData.objective}</p>
      <h2>Education</h2>
      <ul>
        <li>${resumeData['education-1']}</li>
        <li>${resumeData['education-2']}</li>
      </ul>
      <h2>Skills</h2>
      <ul>
        <li>${resumeData['skill-1']}</li>
        <li>${resumeData['skill-2']}</li>
      </ul>
    `;
        generatedResumeDiv.innerHTML = generatedResume;
        resumeActionsDiv.style.display = 'block';
    });
});
