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

// Mock Interview
// function that returns special array and returns its product sum
// dept of array
// array[(5, 2, [7, -1], 3, [6, [-13, 8], 4])];

// 12; // calculated as : 5+2+2*(7-1) + 3 + 2 * (6+3 *(-13+8)+4)

function productSum(array, arrCounter = 1) {
  let result = 0;

  array.forEach((element) => {
    if (Array.isArray(element)) {
      result += productSum(element, arrCounter + 1);
    } else {
      result += element;
    }
  });

  return result * arrCounter;
}
// Binary SearcH Tree

// recursion
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueInBstHelper(tree, target, tree.value);
}
function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

// Node Depths

function nodeDepths(root, value = 0) {
  // Write your code here.
  if (root === null) return 0;

  return (
    value + nodeDepths(root.left, value + 1) + nodeDepths(root.right, value + 1)
  );
}

// Node Depths 2
function nodeDepths(root) {
  // Write your code here.
  let sumOfDepths = 0;

  const stack = [{ node: root, depth: 0 }];

  while (stack.length > 0) {
    const { node, depth } = stack.pop();

    if (node === null) continue;
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });

    console.log(stack);
  }
  return sumOfDepths;
}

// minimum waiting time queries
function minimumWaitingTime(queries) {
  // Write your code here.
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;

  for (let idx = 0; idx < queries.length; idx++) {
    const duration = queries[idx];
    const queriesLeft = queries.length - (idx + 1);
    totalWaitingTime += duration * queriesLeft;
  }
  return totalWaitingTime;
}

// class photos

function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.

  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);
  const shirtColorInFirstRow =
    redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
  for (let idx = 0; idx < redShirtHeights.length; idx++) {
    const redShirtHeight = redShirtHeights[idx];
    const blueShirtHeight = blueShirtHeights[idx];
    console.log(blueShirtHeight);
    if (shirtColorInFirstRow === "RED") {
      if (redShirtHeight >= blueShirtHeight) return false;
    } else if (blueShirtHeight >= redShirtHeight) return false;
  }

  return true;
}
