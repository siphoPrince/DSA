class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(items){
        this.items.push(items);
    }

    dequeue(){
        return this.items.shift();
    }

    peek(){
        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }


}

const queues = new Queue();

queues.enqueue(10);
queues.enqueue(20);
queues.enqueue(30);

console.log(queues.items);

queues.dequeue();

console.log(queues.items);