class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    createNode(value) {
        return {
            value,
            next: null
        }
    }

    add(value) {
        const node = this.createNode(value);
        // { value: 'ella', next: null }
        if (this.head === null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }

    remove(value) {
        if (this.head.value === value) { // value == ella
            // head: { value: 'ella', next: { value: 'olatunji', next: null } }
            this.head = this.head.next; // head: { value: 'olatunji', next: null }
            return;
        }

        // head: { value: 'ella', next: { value: 'olatunji', next: { value: 'akpan', next: null } } }
        // value == olatunji
        let prev = this.head;
        let current = this.head.next;

        while (current !== null) {
            if (current.value === value) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}



const linkedList = new LinkedList();

linkedList.add('ella');
linkedList.add('olatunji');
linkedList.add('akpan');

console.log(linkedList.contains('sam'))

linkedList.remove('ella');

console.log(linkedList.contains('ella'))

