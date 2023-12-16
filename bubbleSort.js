let array = [21, 8, 1, 5, 11];
let newArray = [];

function bubbleSort(array) {
    // Only change code below this line
    let swapped = true;
    while(swapped) {
        swapped = false;
        for(let i = 0; i < array.length; i++) {
            if(array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    } 
    
    return array;
    // Only change code above this line
    //[5, 8, 12, 1]
    //[1, 5, 8, 12]
  }

  bubbleSort(array);

  console.log(array);
  console.log(newArray);