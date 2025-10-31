
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  toggle.textContent = document.body.classList.contains('light-theme') ? '🌞' : '🌙';
});
// Scroll-to-top button functionality
