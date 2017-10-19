

  function bubbleSort  (array) {
    for (let j = 0; j < array.length; j++) {
      let didNotSwap = true;
    for ( let i = 0; i < array.length; i++) {
      if(array[i] > array[i + 1]) {
        [ array[i], array[i + 1] ] = [ array[i+ 1], array[i] ];
        didNotSwap = false;
    }
  }
    if(didNotSwap) {
     return array;
    }
  }
    return array;
  }


module.exports = bubbleSort;
