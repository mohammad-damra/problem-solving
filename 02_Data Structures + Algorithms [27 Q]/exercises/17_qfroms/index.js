// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}
	add(elem) {
		this.stack1.push(elem);
	}
	remove() {
		while (this.stack1.length > 0) {
			this.stack2.push(stack1.pop());
		}
		return this.stack2.pop();
	}
	add(elem) {
		for (let i = 0; i < this.stack2.length; i++) {
			this.stack1.push(this.last.pop());
		}
		this.stack1.push(elem);
	}
	peek() {
		if (this.stack1.length > 0) {
			return this.stack1[0];
		}
		return this.stack2[this.stack2.length - 1];
	}
}

module.exports = Queue;
