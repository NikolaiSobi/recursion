/** product: calculate the product of an array of numbers. */

function product(nums) {
  if(nums.length === 0) return 1

  return nums[0] * product(nums.slice(1))
}
console.log(product([2,4,3]))

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if(words.length === 0) return ""

  let currentWord = words[0]
  let longestWord = longest(words.slice(1))

  if(currentWord.length > longestWord.length){
    return currentWord
  } else {
    return longestWord
  }
}
console.log(longest(["hi", "five", "coolio"]))

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if(str.length === 0) return ""
  return str[0] + everyOther(str.slice(2))
}
console.log(everyOther("Thanks"))

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if(str.length < 2) return true
  if(str[0] === str[str.length - 1]){
    return isPalindrome(str.slice(1,-1))
  } else {
    return false
  }
}
console.log(isPalindrome("ffa"))

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if(arr.length === 0) return -1
  if(val === arr[0]){
    return 0
  } else {
    let idx = findIndex(arr.slice(1), val)
    if(idx === -1) return idx
    return idx + 1
  }

}
console.log(findIndex([1,2,3,4,5,6], 8))

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if(str.length === 0) return ""
  return str[str.length - 1] + revString(str.slice(0,-1))
}
console.log(revString("hello"))

/** gatherStrings: given an object, return an array of all of the string values. */


function gatherStrings(obj) {
  if(Object.keys(obj).length === 0) return []
  let key = Object.keys(obj)[0]
  let newObj = {...obj}
  delete newObj[key]
  let stringArr = gatherStrings(newObj)
  if(typeof obj[key] === "string"){
    stringArr.push(obj[key])
  }
  return stringArr
}
let whiskey = {
  name: "Whiskey",
  age: 5,
  favFood: "popcorn",
  color: "black",
  barks: false
}
console.log(gatherStrings(whiskey))

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present).
 * Divide the array into two
 * you check [1,2,5,6,7,9,10]
 * 
 *  */

// finding value recursively 
function binarySearch(arr, val) {
  if(arr.length === 0) return -1
  let mid_index = Math.floor(arr.length / 2)
  let mid = arr[mid_index]
  if(mid == val) {
    return mid_index + mid
  }
    if(mid < val) {
      let r = arr.slice(mid_index + 1)
      return binarySearch(r, val)
    }
    if(mid > val) {
      let r = arr.slice(0, mid_index)
      return binarySearch(r, val)
    }
  }
console.log(binarySearch([1,3,5,6,7], 6))

// finding index with while loop
function binSearch(arr, target) {
  let left = 0
  let right = arr.length - 1

  while(left <= right) {
    let middle = Math.floor((left + right) / 2)

    if(arr[middle] == target) {
      return middle
    }
    if( arr[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1
}
console.log(binSearch([1,3,5,6,7], 3))

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
