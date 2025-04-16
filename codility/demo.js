// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Step 1: Remove non-positive numbers and sort the array
    const filtered = A.filter(n => n > 0).sort((a, b) => a - b);

    console.log(filtered)

    let smallest = 1;

    for (let i = 0; i < filtered.length; i++) {
        // Skip duplicates
        if (filtered[i] === filtered[i - 1]) continue;

        // If current number matches 'smallest', increment it
        if (filtered[i] === smallest) {
            smallest++;
        }
    }

    return smallest;
}

 console.log(solution([1,2,3]))