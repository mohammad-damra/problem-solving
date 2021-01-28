// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
	constructor() {
		this.data = [];
		this.rear = 0;
		this.size = 10;
	}

	enqueue(element) {
		this.data[this.rear] = element;
		this.rear = this.rear + 1;
	}

	enqueue(element) {
		if (this.rear < this.size) {
			this.data[this.rear] = element;
			this.rear = this.rear + 1;
		}
	}

	length() {
		return this.rear;
	}
}

module.exports = Queue;
