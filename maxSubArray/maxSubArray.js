function maxSubArray(arr) {
  let overallMax = 0;
  let currentMax = 0;

  arr.forEach(value => {
    currentMax += value;

    if (currentMax < 0) {
      currentMax = 0;
    }

    overallMax = Math.max(overallMax, currentMax)
  })

  if (overallMax === 0) {
    return Math.max(...arr);
  }

  return overallMax;
}

console.assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.assert(maxSubArray([-2, -3, -1]) === -1);