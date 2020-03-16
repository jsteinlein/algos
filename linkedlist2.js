class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

contains(value) {
    var runner = this.head;
    while(runner) {
        if(runner.value == value) {
            return true
        }
        runner = runner.next
    }
    return this
}


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


length() {
    var runner = this.head;
    var nodes = 0;
    while(runner) {
        nodes += 1;
        runner=runner.next
    }
    return this
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

display() {
    var runner = this.head;
    var count = 0;
    while(runner) {
        console.log(`You are on node ${count}, the value contained is ${runner.value}`);
        count += 1;
        runner = runner.next;
    }
    return this
}