class Queue {
    constructor() {
        this.queue = [];
    }
    
    enqueue(item) {
        this.queue.push(item);
    }
    
    dequeue() {
        return this.queue.shift();
    }
    
    peek() {
        return this.queue[0];
    }
    
    size() {
        return this.queue.length;
    }
    
    isEmpty() {
        return this.queue.length === 0;
    }
}

const queue = new Queue();

queue.enqueue('ella');
queue.enqueue('olatunji');
queue.enqueue('rasheed');
queue.enqueue('shalom');
queue.enqueue('david');

console.log(queue.dequeue()); // removes ella
console.log(queue.dequeue()); // removes olatunji

console.log(queue.peek()); // rasheed

queue.enqueue('daniel'); // adds daniel

console.log(queue.dequeue()); // removes rasheed

console.log(queue.dequeue()); // removes shalom