class PriorityQueue {
    constructor() {
        this.collection = [];
    }
    printCollection() {
        console.log(this.collection);
    }
    enqueue(element) {
        if (this.isEmpty()) {
        this.collection.push(element);
        } else {
        let added = false;
        for (let i = 1; i <= this.collection.length; i++) {
            // { priority: 1, value: 'hello' } element
            const currentElement = this.collection[i - 1];
            if (element.priority < currentElement.priority) {
            this.collection.splice(i - 1, 0, element);
            added = true;
            break;
            }
        }
        if (!added) {
            this.collection.push(element);
        }
        }
    }
    dequeue() {
        let value = this.collection.shift();
        return value[0];
    }
    front() {
        return this.collection[0];
    }
    size() {
        return this.collection.length;
    }
    isEmpty() {
        return this.collection.length === 0;
    }
}


const pq = new PriorityQueue();

pq.enqueue({ priority: 3, value: 'omolola' });
pq.enqueue({ priority: 1, value: 'akpan' });
pq.enqueue({ priority: 0, value: 'rasheed' });
pq.enqueue({ priority: 1, value: 'bisi' });
pq.enqueue({ priority: 5, value: 'daniel' });


console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());

console.log(pq.collection)

