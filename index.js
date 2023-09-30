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

  append(value) {
    let node = new Node(value);
    let current;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
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
myLinkedList.prepend(200);
myLinkedList.prepend(100);
myLinkedList.prepend(50);
myLinkedList.append(300);
myLinkedList.append(400);
myLinkedList.append(500);

myLinkedList.toString();
