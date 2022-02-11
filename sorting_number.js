/**
 * @desc sorting the array
 * without using pre build method
 * all zero come starting of array and 1 end of array
 * Algorithms
 * Step1 count the length or array
 * Step2 create blank array for zero, one and new array
 * Step3 Iterate the array
 * Step4 Check if value is 0 then save value in newZeroArray
 * Step5 Check if value is 1 then save value in newOneArray
 * Step6 print the new array
 */
const arr = [0, 1, 1, 0, 1, 0, 1];
const arrayLength = arr.length;
const newArray = [];
let zeroIndex = 0;
let oneIndex = arr.length - 1;
const newZeroArray = [];
const newOneArray = [];
for (let i = 0; i < arrayLength; i++) {
    if (arr[i] === 0) {
        newZeroArray[zeroIndex] = arr[i];
        ++zeroIndex;
    } else {
        newOneArray[oneIndex] = arr[i];
        --oneIndex;
    }
}
console.log([...newZeroArray, ...newOneArray]); //[0, 0, 0, 1, 1, 1, 1]
