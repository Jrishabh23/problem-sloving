const arr = [2,3,78,2,3,1,2,3,2,3,2,43,5,6,78,9,54,32,45];
const obj = {};
for(let num of arr ) {
  obj[`${num}`] = obj.hasOwnProperty(`${num}`) ? ++obj[`${num}`] : 1;
}
console.log(obj)
