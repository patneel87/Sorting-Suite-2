
function mergeSort(array) { 
  if (array.length <= 1) { 
  
    return array;
  }
  const midPoint = Math.floor(array.length / 2); 
  const left = array.slice(0, midPoint); 
  const right = array.slice(midPoint, array.length); 

  return merge(mergeSort(left), mergeSort(right)); 
};
function merge(left, right) { 
  let result = [];
  while (left.length && right.length) { 
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
     result.push(...left, ...right);
   return result;

};

module.exports = mergeSort;



      
