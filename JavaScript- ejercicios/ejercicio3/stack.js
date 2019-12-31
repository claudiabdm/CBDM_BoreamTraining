
const stack = {
    array: [],
    push: function(el) {
        return this.array.unshift(el);
    },
    pop: function() {
        if (this.array.length < 1){
            return null;
        }
        let last = this.array[0];
        this.array = this.array.slice(1,);
        return last;

    },
    size: function() {
        return this.array.length;
    },
    empty: function() {
        return this.array.length === 0;
    }
}

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size() === 3);
console.log(stack.pop() === 3);

stack.push(4);

console.log(stack.empty() === false);
console.log(stack.pop() === 4);
console.log(stack.pop() === 2);
console.log(stack.pop() === 1);
console.log(stack.pop() === null);
console.log(stack.size() === 0);
console.log(stack.empty() === true);