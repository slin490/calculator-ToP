export const add = (a, b) => {
	return a + b;
}

export const subtract = (a, b) => {
	return a - b;
}

export const multiply = (a, b) => {
	return a * b;
}

export const divide = (a, b) => {
	return a / b;
}

export const operate = (operation, a, b) => {
	return operation(a, b);
}

// module.exports = {add, subtract, multiply, divide, operate}