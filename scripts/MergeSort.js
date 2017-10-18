
function mergeSort(array) { //splits array by its midpoint
  if (array.length <= 1) { //returns the array if there is only 1 item in array
    // debugger;
    return array;
  }
  const midPoint = Math.floor(array.length / 2); //midpoint
  const a = array.slice(0, midPoint); //1st half of original array
  const b = array.slice(midPoint, array.length); //2nd half of original array
  // console.log(a)
  // console.log(b)
  return merge(mergeSort(a), mergeSort(b)); //calls merge on the two arrays (recursively split)
};
function merge(a, b) { //takes 2 sorted arrays and returns one sorted array
  let result = [];
  // console.log('tick');
  while (a.length && b.length) { //while both arrays have a length
    if (a[0] <= b[0]) {
      result.push(a.shift());
    } else {
      result.push(b.shift());
    }
  }
  while (a.length) { //while 1st half has length
    result.push(a.shift());
  }
  while (b.length) { //while 2nd half has length
    result.push(b.shift());
  }
  // console.log(result)
  return result;
};

module.exports = mergeSort;



      
