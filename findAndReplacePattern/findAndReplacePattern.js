/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
function findAndReplacePattern(words, pattern) {
  return words.filter(word => checkWord(word, pattern));
}

function checkWord(word, pattern) {
  if (word.length !== pattern.length) {
    return false;
  }

  const map = new Map();
  const used = new Map();

  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i]) && !used.has(word[i])) {
      map.set(pattern[i], word[i]);
      used.set(word[i], true);
    }

    if (!map.has(pattern[i]) && used.has(word[i])) {
      return false;
    }

    if (map.has(pattern[i]) && map.get(pattern[i]) !== word[i]) {
      return false;
    }
  }

  return true;
}
