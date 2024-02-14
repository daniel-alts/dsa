class Stack {
    constructor() {
        this.data = [];
        this.count = 0;
    }
    
    push(record) { // o(1)
        this.data.push(record); // o(1)
        this.count++; // o(1)
    }
    
    pop() {
        return this.data.pop();
    }
    
    peek() {
        return this.data[this.data.length - 1];
    }
}

const stack = new Stack();

stack.push('ella');
stack.push('olatunji');
stack.push('rasheed');
stack.push('shalom');
stack.push('david');

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.peek());
console.log(stack.peek());

stack.push('david');

stack.push('daniel')


console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

class Board {
    constructor() {
        this.boardData = {}
        this.stack = new Stack()
    }

    insert(data) {
        // run some operation
        this.boardData[data] = data;
        this.stack.push(this.boardData);
    }

    undo() {
        return this.stack.pop();
    }
}

