class Stack{
    constructor(){
        this.items = [];

    }

    // add an element to the top of the stack
    push(elements) {
        this.items.push(elements);
    }
    // Remove an element the top of the stack
    pop(){
        if(this.items.length === 0){
            return "Stack is empty";
        }
        return this.items.pop();
    }
    //view the element of the stack
    peek(){
        if(this.items.length === 0){
            return "Stack is empty";
        }
        return this.items[this.items.length - 1]
    }

    // check is empty
    isEmpty(){
        return this.items.length === 0;
    }

    // get the number of elements in stack
    size(){
        return this.items.length;
    }
    // clear the stack
    clear(){
        this.items = [];
    }
    // print the stack elements
    printStack(){
        let str = "";
        for (let i = 0; i < this.items.length; i++){
            str += this.items[i] + " "
        }
        return str.trim();
    }

}

// usage examples
const myStack = new Stack();

console.log(myStack.isEmpty());

myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);



console.log(myStack.printStack());

console.log(myStack.size());

console.log(myStack.pop());
console.log(myStack.printStack());
