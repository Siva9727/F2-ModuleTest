const form = document.getElementById("form");
const formContainer = document.getElementById("formContainer");
const display = document.getElementById("display");
const users = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;

  users.push({ name, username });
});

document.getElementById("img1").addEventListener("click", function () {
  formContainer.style.display = "block";
});

document.getElementById("img2").addEventListener("click", function () {
  let userInfo = "";
  for (const user of users) {
    userInfo += "Name: " + user.name + "<br>Username: " + user.username + "<br><br>";
  }
  
  display.style.display = "block";
  document.getElementById("user-info").innerHTML = userInfo;
});
