const testArray = [5, 4, 33, 2, 8];

function insertionSort(array) {
    for(let i = 1; i < array.length; i++) {
        let indexTemp = array[i];
        let j = i - 1;
        while(j >= 0 && array[j] > indexTemp) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = indexTemp;
    }
    console.log(array);
}

insertionSort(testArray);