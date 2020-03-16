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