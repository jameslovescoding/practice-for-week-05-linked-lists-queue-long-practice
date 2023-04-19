// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list

        // Your code here
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;
        return this;

        // Write your hypothesis on the time complexity of this method here
        // O(N)
    }

    removeFromHead() {
        // Remove node at head

        // Your code here
        if (!this.head) {
            return undefined;
        }
        let deleteElement = this.head;
        this.head = this.head.next;
        this.length--;
        return deleteElement;
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here
        if (!this.head) {
            return undefined;
        } else if (!this.head.next){
            let deleteElement = this.head;
            this.head = null;
            this.length--;
            return deleteElement;
        } else {
            let curr = this.head;
            while (curr.next.next) {
                curr = curr.next;
            }
            let deleteElement = curr.next;
            curr.next = null;
            this.length--;
            return deleteElement;
        }


        // Write your hypothesis on the time complexity of this method here
        // O(N)
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here
        if (!this.head) {
            return;
        } else {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    print() {
        // Print out the linked list

        // Your code here
        if (!this.head) {
            return;
        } else {
            let curr = this.head;
            while (curr) {
                console.log(curr.value);
                curr = curr.next;
            }
        }

        // Write your hypothesis on the time complexity of this method here
        // O(N)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}