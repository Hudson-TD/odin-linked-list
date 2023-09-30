class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }

  toString() {
    let current = this.head;

    while (current) {
      console.log(current.value.toString());
      current = current.nextNode;
    }
  }
}

const myLinkedList = new LinkedList();
myLinkedList.prepend(100);
myLinkedList.prepend(200);
myLinkedList.prepend(300);
myLinkedList.toString();
