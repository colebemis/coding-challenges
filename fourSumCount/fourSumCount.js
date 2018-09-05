/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
function fourSumCount(A, B, C, D) {
  const freqTable = {};

  A.forEach(a => {
    B.forEach(b => {
      const sum = a + b;
      const freq = freqTable[sum];
      freqTable[sum] = freq ? freq + 1 : 1;
    })
  })

 let count = 0;

  C.forEach(c => {
    D.forEach(d => {
      count += freqTable[-(c + d)] || 0;
    })
  })

  return count;
};

console.assert(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]) === 2);
