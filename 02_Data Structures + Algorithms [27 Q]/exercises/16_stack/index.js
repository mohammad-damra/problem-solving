// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
	constructor() {
		this.data = [];
		this.top = 0;
	}
	push(elem) {
		this.data[this.top] = elem;
		this.top = this.top + 1;
	}
	peek() {
		return this.data[this.top - 1];
	}
	isEmpty() {
		return this.top === 0;
	}
	pop() {
		if (this.isEmpty() === false) {
			this.top = this.top - 1;
			return this.data.pop();
		}
	}
}

module.exports = Stack;
