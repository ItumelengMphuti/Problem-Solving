class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element)
  }
  
  pop() {
    if(this.isEmpty()) {
        return "Stack is empty."
    }
    return this.stack.pop();
  }
  isEmpty() {
    return this.size() === 0;
  }
  
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.stack[this.size() - 1];
  }

  size() {
    return this.stack.length;
  }

  printStack() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.stack;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(3);
stack.push(20);
stack.push(7);
console.log(stack.size());
console.log(stack.peek());
console.log(stack.printStack());
