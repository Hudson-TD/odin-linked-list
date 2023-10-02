import LinkedList from "./LinkedList.js";

// Instantiate linked list obj
const myLinkedList = new LinkedList();

//Showcase prepend/append methods
console.log("Prepend / Append Methods creating linked list...");
myLinkedList.prepend(200);
myLinkedList.prepend(100);
myLinkedList.prepend(50);
myLinkedList.append(300);
myLinkedList.append(400);
myLinkedList.prepend(25);
myLinkedList.append(750);

//Showcase head(first node), tail(last node), and size (# of nodes in LL) methods
console.log(``);
myLinkedList.logHead();
myLinkedList.logTail();
myLinkedList.size();

//Showcase "index" targeting method
console.log(``);
myLinkedList.findNodeAt(0);
myLinkedList.findNodeAt(3);
myLinkedList.findNodeAt(5);

//Showcase value search method (true/false)
console.log(``);
myLinkedList.contains(200);
myLinkedList.contains(40);
myLinkedList.contains(100);
myLinkedList.contains(1);

// Method to illustrate LL (functionally console logging in easily digestible format)
console.log(``);
console.log("Pre-popped list");
myLinkedList.toString();

//Showcase last element removal method
myLinkedList.pop();
console.log("Popped list");
myLinkedList.toString();
