import LinkedList from './linkedList.js';

// Erstelle eine neue LinkedList
const list = new LinkedList();

// Test für append()
list.append('dog');
list.append('cat');
list.append('parrot');

console.log('Append Tests:');
console.log(`Erster Knoten (head) Wert: ${list.head.value} (Erwartet: "dog")`);
console.log(`Zweiter Knoten Wert: ${list.head.nextNode.value} (Erwartet: "cat")`);
console.log(`Dritter Knoten Wert: ${list.head.nextNode.nextNode.value} (Erwartet: "parrot")`);
console.log(`Nächster Knoten nach parrot: ${list.head.nextNode.nextNode.nextNode} (Erwartet: null)`);

// Test für prepend()
const list2 = new LinkedList();
list2.prepend('dog');
list2.prepend('cat');
list2.prepend('parrot');

console.log('\nPrepend Tests:');
console.log(`Erster Knoten (head) Wert: ${list2.head.value} (Erwartet: "parrot")`);
console.log(`Zweiter Knoten Wert: ${list2.head.nextNode.value} (Erwartet: "cat")`);
console.log(`Dritter Knoten Wert: ${list2.head.nextNode.nextNode.value} (Erwartet: "dog")`);
console.log(`Nächster Knoten nach dog: ${list2.head.nextNode.nextNode.nextNode} (Erwartet: null)`);

//Test für size()
console.log('\nSize Tests:');
console.log(`Länge der ersten Liste: ${list.size()} (Erwartet: 3)`);
console.log(`Länge der zweiten Liste: ${list2.size()} (Erwartet: 3)`);

// Test für tail()
console.log('\nTail Tests:');
console.log(`Letzter Knoten Wert: ${list.tail().value} (Erwartet: "parrot")`);
console.log(`Letzter Knoten (nextNode) nach parrot: ${list.tail().nextNode} (Erwartet: null)`);

// Test für at(index)
console.log('\nAt Tests:');
console.log(`Knoten an Index 0: ${list.at(0).value} (Erwartet: "dog")`);
console.log(`Knoten an Index 1: ${list.at(1).value} (Erwartet: "cat")`);
console.log(`Knoten an Index 2: ${list.at(2).value} (Erwartet: "parrot")`);
console.log(`Knoten an Index 3: ${list.at(3)} (Erwartet: null)`);
console.log(`Knoten an Index -1: ${list.at(-1)} (Erwartet: null)`);
console.log(`Knoten an Index 5: ${list.at(5)} (Erwartet: null)`);

// Test für pop()
console.log('\nPop Tests:');

const list3 = new LinkedList();
list3.append('apple');
list3.append('banana');
list3.append('cherry');

// Teste das Entfernen des letzten Knotens
console.log(`Letzter Knoten vor Pop: ${list3.tail().value} (Erwartet: "cherry")`);
list3.pop();
console.log(`Letzter Knoten nach Pop: ${list3.tail().value} (Erwartet: "banana")`);

// Entferne den letzten Knoten und teste erneut
list3.pop();
console.log(`Letzter Knoten nach zweitem Pop: ${list3.tail().value} (Erwartet: "apple")`);

// Entferne den letzten Knoten und teste erneut
list3.pop();
console.log(`Liste nach drittem Pop, Head: ${list3.head} (Erwartet: null)`); // Sollte null sein

// Teste Pop auf einer leeren Liste
console.log(`Pop auf leerer Liste: ${list3.pop()} (Erwartet: null)`); // Sollte null zurückgeben

// Test für contains()
console.log('\nContains Tests:');

// Erstelle eine neue LinkedList und füge einige Knoten hinzu
const list4 = new LinkedList();
list4.append('apple');
list4.append('banana');
list4.append('cherry');

// Teste das Vorhandensein von Werten
console.log(`Liste enthält "banana": ${list4.contains('banana')} (Erwartet: true)`);
console.log(`Liste enthält "apple": ${list4.contains('apple')} (Erwartet: true)`);
console.log(`Liste enthält "cherry": ${list4.contains('cherry')} (Erwartet: true)`);
console.log(`Liste enthält "date": ${list4.contains('date')} (Erwartet: false)`);

// Teste auf einer leeren Liste
const emptyList = new LinkedList();
console.log(`Leere Liste enthält "anyValue": ${emptyList.contains('anyValue')} (Erwartet: false)`);
