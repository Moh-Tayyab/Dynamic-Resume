document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const generateResumeButton = document.getElementById('generate-resume') as HTMLButtonElement;
    const generatedResumeDiv = document.getElementById('generated-resume') as HTMLDivElement;
  
    generateResumeButton.addEventListener('click', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const resumeData: { [key: string]: string } = {};
      formData.forEach((value, key) => {
        resumeData[key] = value.toString();
      });
  
      const generatedResume = `
        <h1>${resumeData.name}</h1>
        <img src="${resumeData['profile-picture']}" alt="Profile Picture">
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
    });
  });
  