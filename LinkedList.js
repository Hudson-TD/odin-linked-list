import Node from "./Node.js";

export default class LinkedList {
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

  size() {
    let trueNodes = this.length - 1;
    if (trueNodes > 0) {
      console.log(`List length: ${this.length}`);
    } else {
      console.log(`No present nodes`);
    }
  }

  logHead() {
    console.log(`Current Head: ${this.head.value}`);
  }

  logTail() {
    let current = this.head;

    while (current.nextNode) {
      current = current.nextNode;

      if (!current.nextNode) {
        console.log(`Current Tail: ${current.value}`);
      }
    }
  }

  findNodeAt(index) {
    let current = this.head;
    let counter = 0;

    while (current.nextNode !== null) {
      if (counter === index) {
        console.log(`Index ${index}: ${current.value}`);
      }
      current = current.nextNode;
      counter++;
    }

    if (index > counter) {
      console.log("Null");
    }
  }

  pop() {
    let current = this.head;
    let prev = undefined;
    while (current.nextNode != null) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    let current = this.head;
    let triggerFound;

    while (current.nextNode !== null) {
      if (current.value === value) {
        triggerFound = true;
        console.log("True");
      }
      current = current.nextNode;
    }

    if (!triggerFound) {
      console.log("False");
    }
  }

  toString() {
    let current = this.head;
    let fullList = "";
    while (current) {
      fullList += `(${current.value}) -> `;
      current = current.nextNode;
    }
    console.log((fullList += "null"));
  }
}
