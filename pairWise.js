
function pairWise(array, argument) {
    
    let pairIndices = [];
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] == argument && !pairIndices.includes(i) && !pairIndices.includes(j)) {
                pairIndices.push(i, j);
                break;
            }
        }
    }
    return pairIndices.reduce((sum, curr, index) => sum + curr, 0);
}
//        0  1  2  3  4  5 
pairWise([0, 0, 0, 0, 1, 1], 1);
//pairWise([1, 4, 2, 3, 0, 5], 7);
