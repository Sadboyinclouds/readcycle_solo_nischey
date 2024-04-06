
const mockUsers = [
  { email: "userDemo1@example.com", password: "demo1234", name: "John Doe" },
  { email: "userDemo2@example.com", password: "demo5678", name: "Jane Doe" }
];


function loadMockUsers() {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.length === 0) {
    localStorage.setItem('users', JSON.stringify(mockUsers));
  }
}


document.addEventListener('DOMContentLoaded', function() {
  loadMockUsers();
  initLoginForm();
  initSignupForm();
  toggleFormVisibility();
});

function initLoginForm() {
  const loginForm = document.querySelector('.login-form-container form');
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = loginForm.querySelector('input[type=email]').value;
    const password = loginForm.querySelector('input[type=password]').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
    
      const welcomeMessageElement = document.getElementById('welcome-message');
      if (welcomeMessageElement) {
        welcomeMessageElement.textContent = `Welcome, ${user.name}!`;
        welcomeMessageElement.style.display = "block"; 
      } else {
        console.warn('Welcome message element not found in the document.');
      }

      alert(`Login successful! Welcome ${user.name}.`);
     
      closeLoginForm();
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });
}

function initSignupForm() {
  const signupForm = document.querySelector('.signup-form-container form');
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = signupForm.querySelector('input[type=email]').value;
    const password = signupForm.querySelector('input[type=password]').value;
    const name = signupForm.querySelector('input[type=text]').value; 

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.email === email)) {
      alert('Email already exists. Please login or use a different email.');
      return;
    }

    users.push({ email, password, name });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! Please login to continue.');
    closeSignupForm();
    
  });
}

function closeLoginForm() {
  document.querySelector('.login-form-container').classList.remove('active');
}

function closeSignupForm() {
  document.querySelector('.signup-form-container').classList.remove('active');
}

function toggleFormVisibility() {
  document.getElementById('show-signup-form').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.login-form-container').classList.remove('active');
    document.querySelector('.signup-form-container').classList.add('active');
  });

  document.getElementById('close-signup-btn').addEventListener('click', closeSignupForm);
  document.getElementById('close-login-btn').addEventListener('click', closeLoginForm);
}