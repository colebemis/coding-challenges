function minimumSwaps(arr) {
  const visited = {};
  let swaps = 0;

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) {
      continue;
    }

    let cycleIndex = i;
    let cycleEdges = 0;

    while (!visited[cycleIndex]) {
      visited[cycleIndex] = true;
      cycleIndex = arr[cycleIndex] - 1;
      cycleEdges++;
    }

    swaps += cycleEdges - 1;
  }

  return swaps;
}

console.assert(minimumSwaps([7, 1, 3, 2, 4, 5, 6]) === 5);
console.assert(minimumSwaps([4, 3, 1, 2]) === 3);
console.assert(minimumSwaps([2, 3, 4, 1, 5]) === 3);
console.assert(minimumSwaps([1, 3, 5, 2, 4, 6, 7]) === 3);
