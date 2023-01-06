const HIDDEN_CLASSNAME = "hidden";
const USER_NAME_KEY = "userName";

const loginForm = document.querySelector("#login-form");
const userNameInput = loginForm.querySelector("input");
loginForm.addEventListener("submit", event => {
  event.preventDefault();
  const userName = userNameInput.value;
  hideLoginForm();
  showGreeting(userName);
  localStorage.setItem(USER_NAME_KEY, userName);
});
function showLoginForm() {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
}
function hideLoginForm() {
  loginForm.classList.add(HIDDEN_CLASSNAME);
}

const greetingBox = document.querySelector("#greeting-box");
const greeting = document.querySelector("#greeting");
function showGreeting(userName) {
  greeting.innerText = `Hello ${userName}`;
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
  logout.classList.remove(HIDDEN_CLASSNAME);
}

function hideGreeting() {
  greetingBox.classList.add(HIDDEN_CLASSNAME);
}
const logout = document.querySelector("#logout");
logout.addEventListener("click", event => {
  window.localStorage.clear();
  todoList.innerText = "";
  todos = [];
  showLoginForm();
  hideGreeting();
});

const savedUserName = localStorage.getItem(USER_NAME_KEY);
if (savedUserName === null) {
  showLoginForm();
  hideGreeting();
} else {
  hideLoginForm();
  showGreeting(savedUserName);
}
