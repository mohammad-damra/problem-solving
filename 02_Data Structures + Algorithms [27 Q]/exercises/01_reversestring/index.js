// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		stack.push(str[i]);
	}
	let revStr = '';
	while (stack.length > 0) {
		revStr += stack.pop();
	}
	return revStr;
}

module.exports = reverse;
