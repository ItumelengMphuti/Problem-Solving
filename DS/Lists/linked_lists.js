class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // We dont have the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; // There is nothing in our list yest
  }

  addFirst(data) {
    const newNode = new Node(data); // Adds a new node to the heard
    newNode.next = this.head;
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      // Is there something in the linked list?
      this.head = newNode;
      return;
    }

    let current = this.head; // traverse through the list
    // run until it encounters a a node that has next as null
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(index, data) {
    // If the index is less that 0 or index is greater than the size of the list
    if (index < 0 || index > this.size()) {
      throw new Error("Invalid index");
    }

    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  removeTop() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    // Is there something in the linked list?
    if (!this.head) {
      return;
    }

    let current = this.head; // traverse through the list
    // run until it encounters a a node that has next as null
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const linkedlist = new LinkedList();

linkedlist.addFirst(5);
linkedlist.addFirst(3);
linkedlist.addFirst(8);
linkedlist.addLast(6);

linkedlist.removeTop();

linkedlist.addAt(2, 8);

linkedlist.removeLast();
linkedlist.removeAt(2);

linkedlist.print();
console.log("size = " + linkedlist.size());
