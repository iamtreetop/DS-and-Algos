// Suppose Andy and Doris want to choose a restaurant for dinner, and they both 
// have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index 
// sum. If there is a choice tie between answers, output all of them with no order 
// requirement. You could assume there always exists an answer.

// Time: O(nm); Space: O(n)
// initialize empty hash, result array, and minimum variable
// create hash for list 1 where {name: idx}
// iterate over list2
  // if current restaurnt is in the hash
  // store sum as hash[name] + current index
    // if sum < min, reset result array, push restuarant, reset min to sum
    // if sum == min, push restaurant

var findRestaurant = function (list1, list2) {
  const hash = {};
  let common = [];
  let min = Infinity;

  for (let i = 0; i < list1.length; i++) {
    let restaurant = list1[i];
    hash[restaurant] = i;
  }

  for (let i = 0; i < list2.length; i++) {
    let restaurant = list2[i];
    let sum = 0;
    if (hash[restaurant] !== undefined) {
      sum = hash[restaurant] + i;
      if (sum < min) {
        common = [];
        common.push(restaurant);
        min = sum;
      } else if (sum === min) {
        common.push(restaurant);
      }
    }
  }
  return common;
};

// Example 1:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
// list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

// Example 2:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
// list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" 
// with index sum 1 (0+1).

// Example 3:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
// list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]

// Example 4:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], 
// list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]

// Example 5:
// Input: list1 = ["KFC"], list2 = ["KFC"]
// Output: ["KFC"]
 
// Constraints:

// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the stings of list1 are unique.
// All the stings of list2 are unique.