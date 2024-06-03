const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation (replace with more thorough checks)
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all required fields.');
    return;
  }

  // Simulate sending data (replace with actual fetch request)
  console.log('Sending data:', { name, email, message });
  alert('Your message has been sent successfully!');
});
