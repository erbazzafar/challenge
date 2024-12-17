let count = 0;
const nums = [0,1,2,true]
nums.forEach(num => {
    if (num){   // If num is truthy (not 0, null, undefined, false, or NaN)
        count = count + 1;
    }
})

console.log(count);
