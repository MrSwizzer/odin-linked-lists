import LinkedList from './linkedList.js';

// Erstelle eine neue LinkedList
const list = new LinkedList();

// Test für append()
list.append('dog');
list.append('cat');
list.append('parrot');

console.log('Append Tests:');
console.log(`Erster Knoten (head) Wert: ${list.head.value} (Erwartet: "dog")`); // Erwartet: "dog"
console.log(
	`Zweiter Knoten Wert: ${list.head.nextNode.value} (Erwartet: "cat")`
); // Erwartet: "cat"
console.log(
	`Dritter Knoten Wert: ${list.head.nextNode.nextNode.value} (Erwartet: "parrot")`
); // Erwartet: "parrot"
console.log(
	`Nächster Knoten nach parrot: ${list.head.nextNode.nextNode.nextNode} (Erwartet: null)`
); // Erwartet: null (Ende der Liste)

// Test für prepend()
const list2 = new LinkedList();
list2.prepend('dog');
list2.prepend('cat');
list2.prepend('parrot');

console.log('\nPrepend Tests:');
console.log(
	`Erster Knoten (head) Wert: ${list2.head.value} (Erwartet: "parrot")`
); // Erwartet: "parrot"
console.log(
	`Zweiter Knoten Wert: ${list2.head.nextNode.value} (Erwartet: "cat")`
); // Erwartet: "cat"
console.log(
	`Dritter Knoten Wert: ${list2.head.nextNode.nextNode.value} (Erwartet: "dog")`
); // Erwartet: "dog"
console.log(
	`Nächster Knoten nach dog: ${list2.head.nextNode.nextNode.nextNode} (Erwartet: null)`
); // Erwartet: null (Ende der Liste)
