// JavaScript for JAYNEE GRAPHIX

// Portfolio Image Upload Feature
const uploadInput = document.getElementById('upload');
const gallery = document.getElementById('gallery');

uploadInput.addEventListener('change', function () {
  const files = uploadInput.files;
  gallery.innerHTML = ''; // Clear existing gallery

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const image = document.createElement('div');
      image.classList.add('portfolio-item');
      image.style.backgroundImage = `url(${e.target.result})`;
      gallery.appendChild(image);
    };
    reader.readAsDataURL(files[i]);
  }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});

// Form Submission Validation
document.querySelector('form').addEventListener('submit', function (e) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields before submitting.');
    e.preventDefault();
  } else {
    alert('Message sent successfully!');
  }
});
