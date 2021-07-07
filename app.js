const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  showGreeting(username);
});

function showGreeting(username) {
  greeting.innerText = `hello, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  showGreeting(savedUserName);
}
