const duplicateValueContainer = [2,3,2,3,3,3,43,54,89,43,5,6,78,9,54,32,45];
const emptyObject = {};
for(let index in duplicateValueContainer ) {
     !emptyObject.hasOwnProperty(`${duplicateValueContainer[index]}`) ? emptyObject[`${duplicateValueContainer[index]}`] = 1 : '';

}
console.log(Object.keys(emptyObject))
