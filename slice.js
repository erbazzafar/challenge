const arr = [2,3,4,5,6]
const result = arr.slice(0,1) //[2]
console.log(result);
arr.push(7)
console.log(arr);
arr.pop()
console.log(arr);
arr.splice(0,1) //splice removes the given index element and put it into a new array. 
console.log(arr);
