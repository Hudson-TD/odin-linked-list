function linkedList() {
  const list = [];
  return {
    list,
    append: function (value) {
      const entry = node(value);
      this.list.push(entry);
    },
  };
}

function node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

const myLinkedList = linkedList();

myLinkedList.append(250);
console.log(myLinkedList);
