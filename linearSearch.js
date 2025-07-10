function linear(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i; // return the target element
        }
    }
    return -1;
}

const number = [1, 5, 6, 8, 2];
const targ = 3;

const ans = linear(number, targ);
console.log(ans);