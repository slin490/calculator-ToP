import { add, subtract, multiply, divide, operate } from './operations.js';
const currentScreen = document.getElementById("currentScreen");
const previousScreen = document.getElementById("prevScreen");
const displayBtns = document.querySelectorAll(".display");
const clearBtn = document.querySelector(".clear-btn")
const equalBtn = document.querySelector(".equal-btn");
const negativeSign = document.querySelector(".negative-btn");
const operators = document.querySelectorAll(".operators")

displayBtns.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		if(currentScreen.textContent.length < 5){
			currentScreen.textContent += event.target.textContent;
		}
	})
})

operators.forEach((operation) => {
	operation.addEventListener("click", (event) => {
		console.log(event.target.textContent);
	})
})

const clearScreen = () => {
	currentScreen.textContent = "";
}

const calculate = () => {
	return;
}

clearBtn.addEventListener("click", clearScreen);
equalBtn.addEventListener("click", calculate)
