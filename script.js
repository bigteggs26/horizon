const hamburger = document.getElementById('hamburgerBtn');
const navLinks = document.getElementById('navLinks');
const overlay = document.getElementById('navOverlay');

function toggleMenu() {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  overlay.classList.toggle('active', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : ''; // stop background scroll
}

hamburger.addEventListener('click', toggleMenu);

// close menu when a link is clicked (mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) toggleMenu();
  });
});

// close menu when clicking the dark overlay
overlay.addEventListener('click', toggleMenu);

// close menu automatically if resized back to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navLinks.classList.contains('open')) {
    toggleMenu();
  }
});


// Select the toggle button
const toggleBtn = document.querySelector('#dark-mode-toggle');

// Check for saved dark mode preference
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme on page load
if (currentTheme === 'dark') {
  document.body.classList.add('dark-theme');
}

// Listen for a click on the button
toggleBtn.addEventListener('click', () => {
  // Toggle the dark theme class
  document.body.classList.toggle('dark-theme');
  
  // Save preference to localStorage
  let theme = 'light';
  if (document.body.classList.contains('dark-theme')) {
    theme = 'dark';
  }
  localStorage.setItem('theme', theme);
});


// Get elements
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");


// Open modal
openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});


// Close modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


// Close when clicking outside the box
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});