const duplicateNumberArray = [2,3,78,2,3,1,2,3,2,3,2,43,5,6,78,9,54,32,45];
const emptyObject = {};
for(let value of duplicateNumberArray ) {
  emptyObject[`${value}`] = emptyObject.hasOwnProperty(`${value}`) ? ++emptyObject[`${value}`] : 1;
}
console.log('Array contain unique number', Object.keys(emptyObject))
