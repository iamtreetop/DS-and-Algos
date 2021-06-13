// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and 
// an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance 
// (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for 
// the order that it is in).

// sort approach:
// - compute all distances, we can just omit the sqrt and just do x^2 + y^2
// - sort by the distance: best: n log(n)
// - do quicksort with a custom sorting function, then take the first k elements from the array
// time: O(N log(N)) | space: O(1)

var kClosest = function(points, K) {
    points.sort((a,b) => (a[0]*a[0] + a[1]*a[1]) - (b[0]*b[0] + b[1]*b[1]))

    return points.slice(0,K)
};


// Example 1:
// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

// Example 2:
// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.
 
// Constraints:

// 1 <= k <= points.length <= 104
// -104 < xi, yi < 104