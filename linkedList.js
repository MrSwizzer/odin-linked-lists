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

	size() {
		let count = 0;
		let currentNode = this.head;

		while (currentNode !== null) {
			count++;
			currentNode = currentNode.nextNode;
		}
		return count;
	}

	tail() {
		if (this.head === null) {
			return null;
		}

		let currentNode = this.head;

		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
		}

		return currentNode;
	}

	at(index) {
		let count = 0;
		let currentNode = this.head;

		if (Number.isInteger(index) && index >= 0) {
			while (currentNode !== null) {
				if (count == index) {
					return currentNode;
				} else {
					count++;
					currentNode = currentNode.nextNode;
				}
			}
		}
		return null;
	}

	pop() {
		if (this.head === null) {
			return null;
		}

		if (this.head.nextNode === null) {
			this.head = null;
			return;
		}

		let currentNode = this.head;

		while (currentNode.nextNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
		}

		currentNode.nextNode = null;
	}

	contains(value) {
		if (this.head === null) {
			return false;
		}

		let currentNode = this.head;

		while (currentNode !== null) {
			if (currentNode.value === value) {
				return true;
			}
			currentNode = currentNode.nextNode;
		}
		return false;
	}

	find(value) {
		if (this.head === null) {
			return null;
		}

		let counter = 0;
		let currentNode = this.head;

		while (currentNode !== null) {
			if (currentNode.value === value) {
				return counter;
			}
			currentNode = currentNode.nextNode;
			counter++;
		}
		return null;
	}

	toString() {
		if (this.head === null) {
			return null;
		}

		let currentNode = this.head;
		let outputString = `( ${currentNode.value} )`;

		while (currentNode.nextNode !== null) {
			currentNode = currentNode.nextNode;
			outputString += ` -> ( ${currentNode.value} )`;
		}

		outputString += ' -> null';
		return outputString;
	}

	insertAt(value, index) {}

	removeAt(index) {}
}
