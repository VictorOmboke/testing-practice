function analyzeArray(array) {
  const obj = {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length,
  };

  function average(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    let avg = total / arr.length;
    return avg;
  }

  function min(arr) {
    const minimum = Math.min(...arr);
    return minimum;
  }

  function max(arr) {
    const maximum = Math.max(...arr);
    return maximum;
  }

  return obj;
}

module.exports = analyzeArray;
