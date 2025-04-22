// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

function arrayDiff(a, b) {
  return a.filter(element => !b.includes(element))
}

console.log(arrayDiff([1, 2, 3, 4], [1,2]))