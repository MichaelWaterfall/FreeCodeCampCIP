let array = [5, 1, 11, 9, 2];
let newArray = [];

function selectionSort(array) {
    // Only change code below this line
    let smallestNumber = array[0];
    let swapped = true;
    while(swapped) {
        swapped = false;
        for(let i = 0; i < array.length; i++) {
            if(array[i] < smallestNumber) {
                smallestNumber = array[i];
                newArray.push(smallestNumber);
                array.splice(array[i], 1);
                swapped = true;
            }
        }
    } 
    console.log(smallestNumber);
    return newArray;
    // Only change code above this line
  }

selectionSort(array);

console.log(array);
console.log(newArray);