
/**
* First solution
**/
const unsortedNumber = [2,3,43,5,6,78,9,54,32,45];
if(unsortedNumber.length <= 2) {
  console.log("Array have minimum two value");
}
for(let value of unsortedNumber ) {
  unsortedNumber[1] = value > unsortedNumber[1] && value > unsortedNumber[0] ? unsortedNumber[0] : (value > unsortedNumber[1] ? value : unsortedNumber[1]) ;
  unsortedNumber[0] = value > unsortedNumber[0] ? value : unsortedNumber[0];
}
console.log('It is second largest number in array',unsortedNumber[1])

/**
* second solution
**/

const arr = [2,3,43,5,6,78,9,54,32,45];
if(arr.length <= 2) {
  conosle.log('Array have minimum two value");
}
arr[0] < arr[1] ? 
[arr[0], arr[1]] = [arr[1], arr[0]] : '';
[arr[0], arr[1]  = arr[0] > arr[1] ? 
for(let num of arr ) {
  b = num > b && num > a ? a : (num > b ?num : b) ;
  a = num > a ? num : a;
}
console.log('a is first largest',a,'b is second largest number',b)
