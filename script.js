document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
  });
});