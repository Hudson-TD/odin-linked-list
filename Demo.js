import LinkedList from "./LinkedList.js";

// Instantiate linked list obj
const myLinkedList = new LinkedList();

//Showcase prepend/append methods

myLinkedList.prepend(200);
myLinkedList.prepend(100);
myLinkedList.prepend(50);
myLinkedList.append(300);
myLinkedList.append(400);
myLinkedList.prepend(25);
myLinkedList.append(750);

//Showcase head(first node), tail(last node), and size (# of nodes in LL) methods

myLinkedList.logHead();
myLinkedList.logTail();
myLinkedList.size();

// Method to illustrate LL (functionally console logging in easily digestible format)
myLinkedList.toString();

// myLinkedList.pop();
// myLinkedList.findNodeAt(0);
// myLinkedList.findNodeAt(3);
// myLinkedList.findNodeAt(5);

// myLinkedList.toString();

// console.log(myLinkedList);

// myLinkedList.contains(200);
// myLinkedList.contains(100);
// myLinkedList.contains(1);
