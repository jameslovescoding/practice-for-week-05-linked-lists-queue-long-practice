// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        // Your code here
        let newNode = new DoublyLinkedNode(val);
        if (this.length > 0) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        // Your code here
        if (this.length === 0) {
            return undefined;
        }
        if (this.length === 1) {
            let node = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return node.value;
        }
        let node = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        node.next = null;
        this.length--;
        return node.value;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here
        if (this.length === 0) {
            return undefined;
        }
        if (this.length === 1) {
            let node = this.tail;
            this.tail = null;
            this.head = null;
            this.length--;
            return node.value;
        }
        let node = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        node.prev = null;
        this.length--;
        return node.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        // Your code here
        if (this.length === 0) {
            return undefined;
        }
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node

        // Your code here
        if (this.length === 0) {
            return undefined;
        }
        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
