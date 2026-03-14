'use strict';

// Function to handle navigation
function navigateTo(section) {
    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
        sec.style.display = 'none';
    });
    document.getElementById(section).style.display = 'block';
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log('Form Submitted:', Object.fromEntries(formData));
    // additional code to handle the form data
}

// Event listeners for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        navigateTo(e.target.dataset.section);
    });
});

// Event listener for form submission
const form = document.getElementById('myForm');
if (form) {
    form.addEventListener('submit', handleSubmit);
}