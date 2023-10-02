# odin-linked-list
The Odin Project: Linked List


# Description

This project demonstrates comprehension of the fundamental Linked List data structure. Using classes and inheritance the following methods have been defined for the LinkedList class:

- prepend(): Add new element to front of linked list.
- append(): Add new element to end of linked list.
- size(): Log number of nodes in linked list (non-inclusive of final null i.e. first node is 1)
- head(): Returns value of first node (head) in linked list.
- tail(): Returns value of last node in linked list.
- findNodeAt(index): Returns value at the searched index otherwise null if non-existent.
- pop(): Removes existing tail node and points prior next to last node to null.
- contains(value): Returns "True" if searched value exists in linked list, otherwise returns "False".
- find(value):  Returns the index of the node containing searched value, otherwise returns null.
- toString(): Returns formatted string to better visualize linked list
    -- Returned string example: (ex. ( value ) -> ( value ) -> ( value ) -> null)

# Notes

I've provided a Demo.js file with invocations in place (following methods order above) to demontrate all functionality with console logs, in practice the console.log() behavior inside each of the LinkedList class methods would need to be replaced with appropriate return statements.
