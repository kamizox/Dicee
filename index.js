var randm1 = Math.floor(Math.random() * 6) + 1;
document.getElementById("dice1").src = "./images/dice" + randm1 + ".png"

var randm2 = Math.floor(Math.random() * 6) + 1;
document.getElementById("dice2").src = "./images/dice" + randm2 + ".png"

function refreshRotate() {
    document.getElementById("dice1").classList.add("reloder");
    document.getElementById("dice2").classList.add("reloder");
}

refreshRotate();