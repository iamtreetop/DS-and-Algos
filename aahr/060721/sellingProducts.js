// A salesperson must sell n items in a bag with random IDs. The salesperson can remove 
// as many as m items from the bag.

// Determine the minimum number of different IDs the final bag can contain after performing 
// at msContentScript, m deletions. 

// EXAMPLE: 
// n = 6
// ids = [1,1,1,2,3,2]
// m = 2

// Two possible actions that give the minimum 2 differnt IDs:
//   1.  Remove 2 items with ID = 2 and the final bag will contain item ids' = [1,1,1,3]
//   2.  Remove 1 item with ID = 2 and 1 item with ID = 3 and the final bag will contain 
//       item ids' = [1,1,1,2]

// The minimum number of distinct IDs is 2

function deleteProducts(ids, m) {
  // Write your code here
}

// EXAMPLE 2:
// n = 4
// ids = [1,1,5,5]
// m = 2

// Two possible actions that give the minimum 1 different IDs:
//   1.  Remove 2 items with ID = 1 and the final bag will contain item ids' = [5,5]
//   2.  Remove 2 items with ID = 5 and the final bag will contain item ids' = [1,1]

// The minimum number of distinct IDs is 1


// EXAMPLE 3:
// n = 7
// ids = [1,2,3,1,2,2,1]
// m = 3

// Three possible actions that give the minimum 2 different IDs:
//   1.  Remove 3 items with ID = 1 and the final bag will contain item ids' = [2,3,2,2]
//   2.  Remove 3 items with ID = 2 and the final bag will contain item ids' = [1,3,1,1]
//   3.  Remove 1 items with ID = 3 and the final bag will contain item ids' = [1,2,1,2,2,1]

// The minimum number of distinct IDs is 2


