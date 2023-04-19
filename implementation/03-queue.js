const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        // Your code here
        let newNode = new SinglyLinkedNode(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this.length;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.length;
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        // Your code here
        if (this.length === 0) {
            return null;
        }
        if (this.head === this.tail) {
            let curr = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return curr.value;
        } else {
            let curr = this.head;
            this.head = this.head.next;
            this.length--;
            return curr.value;
        }

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}