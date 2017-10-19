
function mergeSort(array) { //splits array by its midpoint
  if (array.length <= 1) { //returns the array if there is only 1 item in array
    // debugger;
    return array;
  }
  const midPoint = Math.floor(array.length / 2); //midpoint
  const left = array.slice(0, midPoint); //1st half of original array
  const right = array.slice(midPoint, array.length); //2nd half of original array
  // console.log(a)
  // console.log(b)
  return merge(mergeSort(left), mergeSort(right)); //calls merge on the two arrays (recursively split)
};
function merge(left, right) { //takes 2 sorted arrays and returns one sorted array
  let result = [];
  // console.log('tick');
  while (left.length && right.length) { //while both arrays have a length
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  
  // console.log(result)
   result.push(...left, ...right);
   return result;

};

module.exports = mergeSort;



      
