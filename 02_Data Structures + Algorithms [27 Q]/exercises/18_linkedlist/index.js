// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
	size() {
		let count = 0;
		let node = this.head;
		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}
	clear() {
		this.head = null;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		let lastNode = this.head;
		if (lastNode) {
			while (lastNode.next) {
				lastNode = lastNode.next;
			}
		}
		return lastNode;
	}
}

module.exports = { Node, LinkedList };
