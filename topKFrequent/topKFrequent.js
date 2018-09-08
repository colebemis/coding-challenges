/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const valueFreqPairs = Array.from(
    nums
      .reduce((acc, num) => {
        const freq = acc.has(num) ? acc.get(num) + 1 : 1;
        acc.set(num, freq);
        return acc;
      }, new Map())
      .entries()
  );

  const buckets = [];

  valueFreqPairs.forEach(([value, freq]) => {
    if (!buckets[freq]) {
      buckets[freq] = [];
    }

    buckets[freq].push(value);
  });

  const result = [];

  for (let i = buckets.length; i >= 0 && result.length < k; i--) {
    if (!buckets[i]) {
      continue;
    }

    for (let j = 0; j < buckets[i].length && result.length < k; j++) {
      result.push(buckets[i][j]);
    }
  }

  return result;
};
