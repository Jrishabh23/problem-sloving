
/**
* second solution
**/
const arr = [2,3,43,5,6,78,9,54,32,45];
if(arr.length <= 2) {
  return "Array have minimum two value";
}
for(let num of arr ) {
  arr[1] = num > arr[1] && num > arr[0] ? arr[0] : (num > arr[1] ? num : arr[1]) ;
  arr[0] = num > arr[0] ? num : arr[0];
}


console.log('a is first largest',a,'b is second largest number',b)

/**
* first solution
**/

const arr = [2,3,43,5,6,78,9,54,32,45];
if(arr.length <= 2) {
  return 'Array have minimum two value";
}
arr[0] < arr[1] ? 
[arr[0], arr[1]] = [arr[1], arr[0]] : '';
[arr[0], arr[1]  = arr[0] > arr[1] ? 
for(let num of arr ) {
  b = num > b && num > a ? a : (num > b ?num : b) ;
  a = num > a ? num : a;
}
