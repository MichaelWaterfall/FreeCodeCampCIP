let array = [5, 1, 11, 9, 2];
let newArray = [];

function selectionSort(array) {
    // Only change code below this line
    
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
    // Only change code above this line
  }

selectionSort(array);

console.log(array);
