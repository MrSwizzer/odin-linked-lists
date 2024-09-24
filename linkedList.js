import Node from './node.js';

export default class LinkedList {
	constructor() {
		this.head = null;
	}

	append(value) {
		const newNode = new Node(value);

		if (this.head === null) {
			this.head = newNode;
		} else {
			let currentNode = this.head;

			while (currentNode.nextNode !== null) {
				currentNode = currentNode.nextNode;
			}

			currentNode.nextNode = newNode;
		}
	}

	prepend(value) {
		const newNode = new Node(value);
		if (this.head === null) {
			this.head = newNode;
		} else {
			newNode.nextNode = this.head;
			this.head = newNode;
		}
	}

	size() {}

	tail() {}

	at(index) {}

	pop() {}

	contains(value) {}

	find(value) {}

	toString() {}

	insertAt(value, index) {}

	size(index) {}
}
