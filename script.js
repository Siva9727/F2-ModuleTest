const formContainer = document.getElementById("formContainer");
const img1 = document.getElementById("img1");

img1.addEventListener("click", function () {
    formContainer.style.display = "block";
});

// once second image is clicked. it should provide the name and username provided on the form. write code for that ?
//define a variable ?

document.getElementById("img2").addEventListener("click", function () {
    let name = document.getElementById('name').value;
    let username = document.getElementById("username").value;
    document.getElementById("user-info").innerHTML = "Name: " + name + "<br>Username: " + username;
    document.getElementById("display").style.display = "block";
});