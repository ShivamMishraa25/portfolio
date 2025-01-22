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



document.querySelectorAll('.section, .project-card').forEach(el => {

  observer.observe(el);

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

