function maximumToys(prices, k) {
  let sum = 0;

  prices.sort((a, b) => a - b);

  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];

    if (sum > k) {
      return i;
    }
  }

  return prices.length;
}

console.assert(maximumToys([1, 2, 3, 4], 7) === 3);
console.assert(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50) === 4);
