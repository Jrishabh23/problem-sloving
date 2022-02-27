const unsortedArray = [2,3,43,5,6,78,9,54,32,45];  
for(let value of unsortedArray ) {   
  unsortedArray[0] = value > unsortedArray[0] ? value : unsortedArray[0]; 
  unsortedArray[1] = value < unsortedArray[1] ? value : unsortedArray[1];
}   
console.log('Largest number of array is ', unsortedArray[0], 'and smallest number of array is',unsortedArray[1])
