const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  showGreeting();
});

function showGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.innerText = `hello, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  showGreeting();
}
