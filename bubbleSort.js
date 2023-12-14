function bubbleSort(array) {
    // Only change code below this line
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
      if(array[i] > array[i + 1]) {
        newArray.push(array[i]);
      } else {
        newArray.push(array[i + 1]);
      }
    }
    return newArray;
    // Only change code above this line
    //[5, 8, 12, 1]
    //[1, 5, 8, 12]
  }