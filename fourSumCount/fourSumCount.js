/*
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
function fourSumCount(A, B, C, D) {
  let count = 0;

  const hashTable = {};

  A.forEach(a => {
    B.forEach(b => {
      const sum = a + b;

      if (sum in hashTable) {
        hashTable[sum]++;
      } else {
        hashTable[sum] = 1;
      }
    });
  });

  C.forEach(c => {
    D.forEach(d => {
      const sum = c + d;

      if (-sum in hashTable) {
        count += hashTable[-sum];
      }
    });
  });

  return count;
}

console.assert(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]) === 2);
