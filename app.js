function linkedList() {
  const list = [];
  let head = null;
  return {
    list,
    append: function (value) {
      let prevNode = this.list.length - 1;
      if (head === null) {
        head = node(value);
        this.list.push(head);
      } else {
        let newNode = node(value);
        this.list.push(newNode);
        this.list[prevNode].nextNode = newNode.value;
      }
    },
    // prepend: function (value) {
    //   this.list.unshift(node(value, this));
    // },
  };
}

function node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

const myLinkedList = linkedList();

myLinkedList.append(500);
myLinkedList.append(250);
myLinkedList.append(700);
console.log(myLinkedList);
