
function quickSort (array) {
    if(array.length <= 1) { //baseCase
      return array;
    };
    const pivot = array.pop(); 
    const arrayLeft = []; 
    const arrayRight = [];   
    
    for (var i = 0; i < array.length; i++) {
        if(array[i] < pivot) {
            arrayLeft.push(array[i]);
        } else {
            arrayRight.push(array[i]);
        }
    }
    return (quickSort(arrayLeft)).concat([pivot], quickSort(arrayRight));
}


module.exports = quickSort;