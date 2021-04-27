window.onload = () => {
	document.querySelector("body").classList.remove("preload");
};

//hamburger

let lines = document.querySelectorAll("ul li");
let burger = document.querySelector(".hamburger .normal");
let inactive = document.querySelector(".inactive");

//let line3 = document.querySelector("3");

function ham() {
	if (burger.classList == "normal") {
		burger.classList = "toggle";

		inactive.classList = "nav-cont active";
	} else {
		burger.classList = "normal";

		inactive.classList = "nav-cont inactive";
	}
}

document.body.addEventListener("click", (e) => {
	if (e.target.tagName !== "LI" && e.target.tagName !== "UL") {
		if (inactive.classList == "nav-cont active") {
			inactive.classList = "nav-cont inactive";

			burger.classList = "normal";
		}
	}
});

//audio
let track = document.createElement("audio");
let svg = document.querySelector(".play svg path");

var isPlaying = false;
track.src = "./assets/audio_fe4d3bcac9.mp3";

function playmusic() {
	isPlaying ? track.pause() : track.play();
}

track.onplaying = function () {
	isPlaying = true;
	svg.style.fill = "#2EDDE8";
};
track.onpause = function () {
	isPlaying = false;
	svg.style.fill = "#2EE88F";
};

//game
let isClicked = false;
document.querySelector(".start").addEventListener("click", () => {
	if (isClicked == false) {
		start();
	}
});

function start() {
	isClicked = true;
	counter = 0;
	document.querySelector(".score").innerHTML = 0;

	var char = document.getElementById("char");
	var block = document.getElementById("block");
	var startMssg = document.querySelector(".message");

	document.querySelector(".score").style.display = "block";
	startMssg.style.display = "block";

	block.classList.add("run");

	if (char.classList == "jump") {
		return;
	}

	const jumpClick = document.body.addEventListener("click", addClass);

	var checkDead = setInterval(() => {
		let characterTop = parseInt(
			window.getComputedStyle(char).getPropertyValue("top")
		);
		let blockLeft = parseInt(
			window.getComputedStyle(block).getPropertyValue("left")
		);
		if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
			char.classList.remove("jump");
			block.classList.remove("run");
			alert("Game Over. score: " + Math.floor(counter / 100));

			startMssg.style.display = "none";
			document.body.removeEventListener("click", addClass);
			document.querySelector(".score").innerHTML = 0;
			window.clearInterval(checkDead);
			isClicked = false;
		} else {
			counter++;
			document.querySelector(".score").innerHTML = Math.floor(counter / 100);
		}
	}, 10);

	document.querySelector(".stop").addEventListener("click", () => {
		window.clearInterval(checkDead);
		char.classList.remove("jump");
		block.classList.remove("run");
		startMssg.style.display = "none";
		document.querySelector(".score").innerHTML = 0;
		counter = 0;
		document.body.removeEventListener("click", addClass);
		track.pause();
		track.currentTime = 0;
		isClicked = false;
	});
}
//game jump
function addClass() {
	var char = document.getElementById("char");
	char.classList.add("jump");
	setTimeout(function () {
		char.classList.remove("jump");
	}, 500);
}
