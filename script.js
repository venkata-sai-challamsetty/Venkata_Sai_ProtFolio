const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;

function updateSlider() {
    slider.style.transform = `translateX(${-index * 100}%)`;
}

next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlider();
});

prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlider();
});

function toggleSkills(id) {
    var skillsList = document.getElementById(id);
    if (skillsList.style.display === "none" || skillsList.style.display === "") {
        skillsList.style.display = "block";
    } else {
        skillsList.style.display = "none";
    }
}
function toggleMenu() {
    const navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('show');
  }
 document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('nav ul');
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      }
    });
  });

  // Accordion behavior for skill tabs in mobile view
  function toggleSkills(id) {
    const allWrappers = document.querySelectorAll('.skill-wrapper');
  
    allWrappers.forEach(wrapper => {
      const list = wrapper.querySelector('.skills-list');
      if (list.id === id) {
        wrapper.classList.toggle('open'); // Toggle clicked one
      } else {
        wrapper.classList.remove('open'); // Close all others
      }
    });
  }
  