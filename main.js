const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Programmer', 'Artist'],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
  onComplete: (self) => {
    console.log('Typing completed');
  }
});


function updateResume() {
  const name = document.getElementById('resumeName').value;
  const description = document.getElementById('resumeDescription').value;

  const previewContent = `
      <h1 class="text-3xl font-bold mb-4">${name}</h1>
      <p class="text-xl">${description}</p>
  `;

  document.getElementById('previewContent').innerHTML = previewContent;
}

// Initialize preview
updateResume();
document.getElementById('resumeName').addEventListener('input', updateResume);
document.getElementById('resumeDescription').addEventListener('input', updateResume);
const express = require('express');
const app = express();
const uuid = require('uuid').v4;
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Store resumes temporarily
const resumes = {};

app.post('/create-resume', (req, res) => {
    const resumeId = uuid();
    resumes[resumeId] = req.body;
    res.json({ url: `http://localhost:${port}/resume/${resumeId}` });
});

app.get('/resume/:id', (req, res) => {
    const resume = resumes[req.params.id];
    if (resume) {
        res.json(resume);
    } else {
        res.status(404).send('Resume not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

