const form = document.getElementById("form");
const formContainer = document.getElementById("formContainer");
const display = document.getElementById("display");
const users = [];
let currentImage = 1;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;

    users.push({ name, username });
});

document.getElementById("img1").addEventListener("click", function () {
    if (currentImage === 1) {
        // perform action for first image
        currentImage++;
        this.style.pointerEvents = "none";
        formContainer.style.display = "block";
    }

});

document.getElementById("img2").addEventListener("click", function () {
    if (currentImage === 2) {
        let userInfo = "";
        // perform action for second image
        currentImage++;
        this.style.pointerEvents = "none";
        for (const user of users) {
            userInfo += "Name: " + user.name + "<br>Username: " + user.username + "<br><br>";
        }

        display.style.display = "block";
        document.getElementById("user-info").innerHTML = userInfo;
    }


});




const img3 = document.getElementById("img3");
const diceImg = document.createElement("img");
diceImg.src = "/images/dice.png";
diceImg.style.display = "none";
diceImg.style.width = "25%";
document.body.appendChild(diceImg);

let sum = 0;
let count = 0;
let attempts = 2;

img3.addEventListener("click", function () {
    if (currentImage === 3) {

        diceImg.style.display = "block";
        this.style.pointerEvents = "none";
    }

});

diceImg.addEventListener("click", function () {
    let value = Math.floor(Math.random() * 6) + 1;
    sum += value;
    count++;
    if (count === 3) {
        if (sum > 10) {
            document.getElementById("img4").style.display = "block";
        } else if (attempts > 0) {
            alert("Score: " + sum + "\nTry again after scoring more than 10.");
            sum = 0;
            count = 0;
            attempts--;
        } else {
            alert("You have used up all of your attempts. Please start over.");
            sum = 0;
            count = 0;
            attempts = 2;
        }
    }
});

// fourth image

document.getElementById("img4").addEventListener("click", function () {
    if (currentImage === 4) {
        this.style.pointerEvents = "none";
        const coupon = Math.random().toString().slice(2, 14);
        alert("Your coupon code is: " + coupon);
    }

});

