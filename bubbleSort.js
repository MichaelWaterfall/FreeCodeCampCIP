const array = [21, 8, 1, 5, 11];
let newArray = [];

function bubbleSort(array) {
    // Only change code below this line
    let smallestNumber;
    for(let i = 0; i < array.length; i++) {
      if(array[i] > array[i + 1]) {
        smallestNumber = array[i + 1];
      }
      
    }
    newArray.push(smallestNumber);
    return newArray;
    // Only change code above this line
    //[5, 8, 12, 1]
    //[1, 5, 8, 12]
  }

  bubbleSort(array);

  console.log(array);
  console.log(newArray);