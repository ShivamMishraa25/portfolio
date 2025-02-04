// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Button Click Animation
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
      button.classList.add('clicked');
      setTimeout(() => button.classList.remove('clicked'), 200);
  });
});

// Intersection Observer for Section Animation
const observer = new IntersectionObserver(
  entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.section').forEach(el => {
  observer.observe(el);
});

// Floating/Hovering effect for project cards
document.addEventListener('DOMContentLoaded', function() {
  gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.to(card, {
      duration: 0.3, // Reduce duration for smoother animation
      delay: index * 0.1,
      y: -5, // Reduce vertical movement
      scale: 1.02, // Reduce scale increase
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  });
});

const uploadButton = document.getElementById('upload-button');
const downloadButton = document.getElementById('download-button');
const uploadInput = document.getElementById('upload-cv');

let uploadedFile = null;

// Handle CV upload
uploadButton.addEventListener('click', () => {
    uploadInput.click();
});

uploadInput.addEventListener('change', (event) => {
    if (event.target.files && event.target.files[0]) {
        uploadedFile = event.target.files[0];
        alert(`Uploaded: ${uploadedFile.name}`);
        downloadButton.disabled = false;
    }
});

// Handle CV download
downloadButton.addEventListener('click', () => {
    if (uploadedFile) {
        const url = URL.createObjectURL(uploadedFile);
        const a = document.createElement('a');
        a.href = url;
        a.download = uploadedFile.name;
        a.click();
        URL.revokeObjectURL(url);
    }
});


// Select all toggle buttons
const toggleButtons = document.querySelectorAll('.toggle-btn');
const body = document.body;

// Function to set a cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

// Function to apply the correct theme based on the saved preference
function applyTheme(theme) {
  const isDarkMode = theme === 'dark';
  body.classList.toggle('dark', isDarkMode); // Apply dark mode class
  toggleButtons.forEach((btn) => btn.classList.toggle('active', isDarkMode)); // Update all buttons
}

// Toggle between light and dark mode
function toggleMode() {
  const isDarkMode = body.classList.toggle('dark'); // Toggle class
  const mode = isDarkMode ? 'dark' : 'light';
  setCookie('theme', mode, 7); // Save the chosen mode in the cookie
  toggleButtons.forEach((btn) => btn.classList.toggle('active', isDarkMode)); // Reflect state on all buttons
}

// On page load, check the saved preference and apply it
window.onload = function () {
  const savedMode = getCookie('theme') || 'light'; // Default to light mode
  applyTheme(savedMode);
};

// Add event listeners to all toggle buttons
toggleButtons.forEach((btn) => btn.addEventListener('click', toggleMode));
          
// CSS ANIMATIONS //          
document.addEventListener('DOMContentLoaded', function() {
  gsap.utils.toArray(".skills-list li").forEach((li, index) => {
    gsap.to(li, {
      duration: 0.5,
      delay: index * 0.1,
      y: -20,
      rotationX: 30,
      rotation: 0,
      scale: 1.1,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
  });
  
  gsap.fromTo(".leFadeInRight span", 
      { x: "80", opacity: 0 }, 
      { x: 0, opacity: 1, duration: 1, delay: 0.3, stagger: 0.15, ease: "power4.easeOut" }
    );
});
