// SoundJS for press buttons

function loadSound() {
  createjs.Sound.registerSound("sounds/tom-1.mp3", "tom1");
  createjs.Sound.registerSound("sounds/tom-2.mp3", "tom2");
  createjs.Sound.registerSound("sounds/tom-3.mp3", "tom3");
  createjs.Sound.registerSound("sounds/tom-4.mp3", "tom4");
  createjs.Sound.registerSound("sounds/snare.mp3", "snare");
  createjs.Sound.registerSound("sounds/crash.mp3", "crash");
  createjs.Sound.registerSound("sounds/kick-bass.mp3", "kick");
}

function playTom1() {
  createjs.Sound.play("tom1");
}

function playTom2() {
  createjs.Sound.play("tom2");
}

function playTom3() {
  createjs.Sound.play("tom3");
}

function playTom4() {
  createjs.Sound.play("tom4");
}

function playSnare() {
  createjs.Sound.play("snare");
}

function playCrash() {
  createjs.Sound.play("crash");
}

function playKick() {
  createjs.Sound.play("kick");
}

// Detecting Button Press for only animation

var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Play Sound
function makeSound(key) {
  switch (key) {
    case "W":
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "A":
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "S":
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "D":
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "J":
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "K":
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "L":
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

// Animation

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey.toLowerCase());
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
