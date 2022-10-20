console.log(
  "TwoNumSum",
  "O of n squared time complexity because we have a loop inside a loop, traverses twice ",
  "space time complexity 1 because we arent adding anything"
);

function twoNumberSum(array, targetSum) {
  // Write your code here.
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
}
console.log(
  "TwoNumSum",
  "O of n  time complexity because we traverse once through array",
  "space time complexity n because we are adding to hash table"
);
function twoNumberSum(array, targetSum) {
  // Write your code here.

  // create hash table, hash table is an object
  let nums = {};
  let potentialMatch = 0;
  // loop through array, traverse
  for (let i = 0; i < array.length; i++) {
    potentialMatch = targetSum - array[i];
    if (nums.hasOwnProperty(potentialMatch)) {
      return [potentialMatch, array[i]];
    } else {
      nums[array[i]] = true;
    }
    console.log(nums);
  }
  return [];
}

function twoNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b);

  let leftPointer = 0;
  let rightPointer = array.length - 1;
  console.log(array);
  for (let i = 0; i < array.length, leftPointer < rightPointer; i++) {
    const currentSum = array[leftPointer] + array[rightPointer];
    console.log(currentSum);
    if (currentSum === targetSum) {
      return [array[leftPointer], array[rightPointer]];
    } else if (currentSum < targetSum) {
      leftPointer++;
      console.log(leftPointer, "left");
    } else if (currentSum > targetSum) {
      rightPointer--;
      console.log(rightPointer, "yeaa");
    }
  }

  return [];
}
