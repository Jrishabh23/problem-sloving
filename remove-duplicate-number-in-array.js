const arr = [2,3,2,3,3,3,43,54,89,43,5,6,78,9,54,32,45];
const obj = {};
for(let num in arr ) {
     !obj.hasOwnProperty(`${arr[num]}`) ? obj[`${arr[num]}`] = 1 : '';

}
console.log(Object.keys(obj))
