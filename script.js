import { add, subtract, multiply, divide, operate } from './operations.js';
const currentScreen = document.getElementById("currentScreen");
const prevScreen = document.getElementById("prevScreen");
const displayBtns = document.querySelectorAll(".display");
const clearBtn = document.querySelector(".clear-btn")
const equalBtn = document.querySelector(".equal-btn");
const negativeSign = document.querySelector(".negative-btn");
const operands = document.querySelectorAll(".operators")

displayBtns.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		//Checks for length before adding
		if(currentScreen.textContent.length < 5 && prevScreen.textContent.length < 20){
			currentScreen.textContent += event.target.textContent;
		}
	})
})

operands.forEach((operand) => {
	//Checks when operand is clicked
	operand.addEventListener("click", (event) => {
		currentScreen.style.marginTop = "15px"
		prevScreen.style.visibility = "visible";
		prevScreen.textContent += currentScreen.textContent + " " + event.target.textContent + " ";
		currentScreen.textContent = ""; 
	})
})

const clearScreen = () => {
	currentScreen.textContent = "";
	prevScreen.textContent = "";
	prevScreen.style.visibility = "hidden";
}

const calculate = () => {
	if (prevScreen.textContent.includes("+")){
		//Gathers only numbers from prevScreen because it contains an operand and converts to int
		let prevNum = Number(prevScreen.textContent.match(/\d+(\.\d+)?/g));
		let currentNum = Number(currentScreen.textContent);
		currentScreen.textContent = prevNum + currentNum;
		prevScreen.textContent = "";
	} else if (prevScreen.textContent.includes("-")){
		let prevNum = Number(prevScreen.textContent.match(/\d+(\.\d+)?/g));
		let currentNum = Number(currentScreen.textContent);
		currentScreen.textContent = prevNum - currentNum;
		prevScreen.textContent = "";
	} else if (prevScreen.textContent.includes("*")){
		let prevNum = Number(prevScreen.textContent.match(/\d+(\.\d+)?/g));
		let currentNum = Number(currentScreen.textContent);
		currentScreen.textContent = prevNum * currentNum;
		prevScreen.textContent = "";
	} else if (prevScreen.textContent.includes("/")){
		let prevNum = Number(prevScreen.textContent.match(/\d+(\.\d+)?/g));
		let currentNum = Number(currentScreen.textContent);
		currentScreen.textContent = prevNum / currentNum;
		prevScreen.textContent = "";
	}
}
clearBtn.addEventListener("click", clearScreen);
equalBtn.addEventListener("click", calculate);
