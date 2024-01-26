function findLongestConsecutiveStreak(arr) {
    if (arr.length === 0) {
        return { length: 0, sum: 0 };
    }

    let currentStreakLength = 1;
    let longestStreakLength = 1;
    let currentStreakSum = arr[0];
    let longestStreakSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            currentStreakLength++;
            currentStreakSum += arr[i];
        } else {
            // Reset streak if the current element is not consecutive
            currentStreakLength = 1;
            currentStreakSum = arr[i];
        }

        // Update longest streak if the current streak is longer or has the same length but higher sum
        if (currentStreakLength > longestStreakLength || (currentStreakLength === longestStreakLength && currentStreakSum > longestStreakSum)) {
            longestStreakLength = currentStreakLength;
            longestStreakSum = currentStreakSum;
        }
    }

    return { length: longestStreakLength, sum: longestStreakSum };
}

// Example usage:
const path1 = [1, 2, 3, 6, 9, 34, 2, 6];
const path2 = [3, 2, 7, 5, 6, 7, 3, 8, 9, 10, 23, 2, 1, 2, 3];
const path3 = [100, 101, 102, 3, 4, 5, 6, 9];

const result1 = findLongestConsecutiveStreak(path1);
const result2 = findLongestConsecutiveStreak(path2);
const result3 = findLongestConsecutiveStreak(path3);

console.log("Path 1 Result:", result1); // { length: 3, sum: 6 }
console.log("Path 2 Result:", result2); // { length: 3, sum: 27 }
console.log("Path 3 Result:", result3); // { length: 4, sum: 18 }