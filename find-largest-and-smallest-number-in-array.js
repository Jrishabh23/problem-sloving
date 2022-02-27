const arr = [2,3,43,5,6,78,9,54,32,45];  
for(let num of arr ) {   
  arr[0] = num > arr[0] ? num : arr[0]; 
  arr[1] = num < arr[1] ? num : arr[1];
}   
console.log('Largest number of array is ', arr[0], 'and smallest number of array is',arr[1])
