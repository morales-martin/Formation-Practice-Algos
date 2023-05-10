function canMatchFellows(input) {
  let fellowMap = new Map();

  for (const student in input) {
    let skill = input[student];
    if (fellowMap.has(skill)) {
      fellowMap.delete(skill);
    } else {
      fellowMap.set(skill);
    }
  }

  return fellowMap.size === 0;
}

let fellowRatings = [
  { oliver: 2, pixel: 1, pinky: 4 },
  { michael: 2, oliver: 3, pinky: 3 },
  { michael: 1, oliver: 1, pixel: 1 },
];
//Return the Fellow with the highest average rating ("pinky")
function highestAverageRating(fellowRatings) {
  let sumData = {};

  // Compile all data in ratings, mapping student to sum + count in sumData
  for (let rating of fellowRatings) {
    for (let fellow in rating) {
      if (sumData[fellow]) {
        sumData[fellow].sum += rating[fellow];
        sumData[fellow].n++;
      } else {
        sumData[fellow] = {
          sum: rating[fellow],
          n: 1,
        };
      }
    }
  }

  // Once all data is compiled, find highest average
  let maxStudent = 0;
  let maxAvg = -Infinity;
  for (let fellow in sumData) {
    let currAvg = sumData[fellow].sum / sumData[fellow].n;
    if (currAvg > maxAvg) {
      maxStudent = fellow;
      maxAvg = currAvg;
    }
  }

  return maxStudent;

  /*

  const highestRating = (sessions) => {

    let countMap = new Map();
    let scoresMap = new Map();

    for(const session of sessions) {

        for(const [fellow, rating] of session){

            if(!countMap.has(fellow)){
                countMap.set(fellow, 1 );
                scoresMap.set(fellow, rating);
              } else {
                countMap.set(fellow, countMap.get(fellow)+1 );
                scoresMap.set(fellow, scoresMap.get(fellow) + rating);

            }

        }
    }

    let highestFellow = null
    let highest = -1
    
    for (const [fellow, count] of countMap) {
      const currAve = scoresMap.get(fellow) / count

      if (currAve > highest) {
        highest = currAve
        highestFellow = fellow
      }
    }

    return highestFellow
}

  */
}
// console.log(highestAverageRating(fellowRatings));

//Return the Fellow with the lowest average rating ("pixel")
function lowestAverageRating(fellowRatings) {
  let sumData = {};

  // Compile all data in ratings, mapping student to sum + count in sumData
  for (let rating of fellowRatings) {
    for (let fellow in rating) {
      if (sumData[fellow]) {
        sumData[fellow].sum += rating[fellow];
        sumData[fellow].n++;
      } else {
        sumData[fellow] = {
          sum: rating[fellow],
          n: 1,
        };
      }
    }
  }

  // Once all data is compiled, find highest average
  let minStudent = 0;
  let minAvg = Infinity;
  for (let fellow in sumData) {
    let currAvg = sumData[fellow].sum / sumData[fellow].n;
    if (currAvg < minAvg) {
      minStudent = fellow;
      minAvg = currAvg;
    }
  }

  return minStudent;
}
// console.log(lowestAverageRating(fellowRatings));
//Return the Fellow that was in the most number of sessions ("oliver")
function mostSessions(data) {
  let fellowSessionMap = new Map();

  for (let session of data) {
    for (let fellow in session) {
      if (fellowSessionMap.has(fellow)) {
        fellowSessionMap.set(fellow, fellowSessionMap.get(fellow) + 1);
      } else {
        fellowSessionMap.set(fellow, 1);
      }
    }
  }

  let maxStudent = "";
  let maxCount = -Infinity;
  for (const [key, val] of fellowSessionMap) {
    if (val > maxCount) {
      maxStudent = key;
      maxCount = val;
    }
  }

  return maxStudent;
}
// console.log(mostSessions(fellowRatings));

//Return the Fellow with the most consistent rating ("pixel")
//  -Can be the fewest number of ratings other than that fellow's most frequent
//  -Can also be the lowest standard deviation from the mean
function mostConsistentRating(sessions) {
  let fellowData = new Map();

  for (let session of sessions) {
    for (let fellow in session) {
      // check if score is duplicate
      if (fellowData[fellow]) {
        // fellow: {score: iterance, score: iterance}
        // if duplicate -> raise duplicate count for this student
        // raise num of sessions
      }
    }
  }

  // iterate through each fellow
  // subtract duplicate count from sessions = x
  // return min x
}

// mostConsistentRating(fellowRatings);

function highestSkillOverlap(fellowScores) {
  let scoreCount = new Map();

  for (const score in fellowScores) {
    if (scoreCount.has(fellowScores[score])) {
      scoreCount.set(
        fellowScores[score],
        scoreCount.get(fellowScores[score]) + 1
      );
    } else {
      scoreCount.set(fellowScores[score], 1);
    }
  }

  let maxCount = -Infinity;
  let maxScore = null;
  for (const [score, count] of scoreCount) {
    if (count > maxCount) {
      maxCount = count;
      maxScore = score;
    }
  }

  return maxScore;
}

function risingTideWinner(nominations) {
  let nomCountMap = new Map();

  for (let fellow of nominations) {
    if (nomCountMap.has(fellow)) {
      nomCountMap.set(fellow, nomCountMap.get(fellow) + 1);
    } else {
      nomCountMap.set(fellow, 1);
    }
  }

  let maxCount = -Infinity;
  let maxFellow = null;
  for (let [fellow, count] of nomCountMap) {
    if (count > maxCount) {
      maxCount = count;
      maxFellow = fellow;
    }
  }

  return maxFellow;
}

let resumeSubmissions = { oliver: 3, pinky: 1, pixel: 2, tobey: 1 };

function earliestFellows(resumeSubmissions) {
  let submissionsMap = new Map();

  for (let fellow in resumeSubmissions) {
    if (submissionsMap.has(resumeSubmissions[fellow])) {
      submissionsMap.get(resumeSubmissions[fellow]).push(fellow);
    } else {
      submissionsMap.set(resumeSubmissions[fellow], [fellow]);
    }
  }

  let earliest = Infinity;
  let earliestFellows = null;
  for (const [time, fellowList] of submissionsMap) {
    if (time < earliest) {
      earliestFellows = fellowList;
      earliest = time;
    }
  }

  return earliestFellows;
}

// console.log(earliestFellows(resumeSubmissions));

/*
Problem Statement - Number of Unique Elements variations

1. Most frequent element in array
      1. Follow-up: In the case of a tie-breaker, pick the largest value.

*2. Least frequent element in array
      1. Follow-up: In the case of a tie-breaker, pick the largest value.

3. Count the number of elements with exactly 2 occurrences ([8, 9, 8, 3, 9, 4] returns 2)

***4. Given an array with all number appearing 2 times and one number appearing 3 times, find the number that shows up 3 times.
      1. Follow-up: Use a set instead of a hashmap/dictionary
      2. Follow-up: Given an array with all numbers appearing 3 times and one number appearing only twice, find the number that only shows up twice. You must use hashsets.


[1,1,1,,2,2,2,,3,3,3,4,4]


set1 = {1} odd
set2 = {1}  things that apeared even

function findtwo(nums){
  // is sorted
  for (let i=0;i<nums.length;i+=3){
    if ( (nums[i] + nums[i+1] + nums[i+2]) % 3 !== 0) {
      return nums[i]
    }
  }
}

{
  1: 3
  2: 2
  2: 2
}

MAP< key, value>
MAP< key, SET> 

MAP< value, key >
{
  1: []
  2: []
  3: []
}

input [0 ,1, 1]
[ 1, 0 ]
  0  1

*/
//

function findThree(nums) {
  const numSet = new Set();
  const numSet2 = new Set();
  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];
    if (numSet.has(number)) {
      numSet2.add(number);
    } else {
      numSet.add(number);
    }
  }
  console.log(numSet);
  return [...numSet2][0];
}

// const findThree = (nums) => nums.reduce((a,b) => a ^ b)

// // 1
// function mostFrequent(arr) {
//   // create hashmap
//   const myMap = new Map();
//   let currMax = -Infinity;
//   let maxEle = null;

//   arr.forEach(num => {
//     let count = (myMap.get(num) || 0) + 1
//     myMap.set(num,count)
//       if (count > currMax) {
//             currMax = count;
//             maxEle = num;
//       }

//       if ((count === currMax) && (num > maxEle)) {
//             maxEle = num
//       }
//    });

//   return maxEle
// }

// console.log(mostFrequent([1,2,3,3,4,5,6]))
// console.log(mostFrequent([1,2,3,3,4,5,5,6]))
// console.log(mostFrequent([]))

function numElementsRepeatedX(input, target) {
  let eleMap = new Map();
  let maxEle;
  let maxCount = -Infinity;

  for (let element of input) {
    let count = (eleMap.get(element) || 0) + 1;
    eleMap.set(element, count);

    if (count > maxCount) {
      maxEle = element;
      maxCount = count;
    }

    if (count === maxCount && maxEle < element) {
      maxEle = element;
    }
  }

  return maxEle;
}
// console.log(numElementsRepeatedX([1, 2, 3, 1, 2, 3], 2)) // 3

function topKFrequencyElements(input, k) {
  let countMap = new Map();
  let frequency = [];

  for (let ele of input) {
    let count = (countMap.get(ele) || 0) + 1;
    countMap.set(ele, count);
  }

  for (let [ele, count] of countMap) {
    frequency[count] = [...frequency[count], ele];
  }

  console.log(frequency);
  let results = [];
  for (let i = input.length; i > 0; i--) {
    if (frequency[i] != null) results.push(frequency[i]);
    if (results.length === k) return results;
  }

  return results;
}
// console.log(topKFrequencyElements([1, 2, 3, 2, 1], 2)) // [1,2]

/*
A dance studio is holding a Tango lesson tonight involving 2 half-hour sessions. The studio is creating a plan to pair dancers in the second session with a different partner 
from the first session. Given a list of Tango pairs for each session, determine if the studio will pair up any partners twice.

This problem aims to familiarize you with storing and retrieving information from data structures to create a minimal algorithm. 

In this instance, the Engineering Method is valuable because it helps you arrive at a more optimal algorithm than brute force.
As a follow-up, how would you write an algorithm to detect repeated pairs in 3 sessions, in any number of sessions? How would you write an 
O(N) time algorithm to determine how often the matcher created each pair? Again, it should count pairs in reversed order as the same pair.

Example(s)
session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
session2 = [["Jack", "Charles"], ["Baxter", "Davis"], ["Alice", "Daniels"]]
hasRepeatTangoPartner(session1, session2) == False

session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
session2 = [["Jack", "Daniels"], ["Alice", "Charles"], ["Baxter", "Davis"]]
hasRepeatTangoPartner(session1, session2) == True

Jack and Daniels have been partnered up on both sessions.

*/

const hasRepeatTangoPartner = (session1, session2) => {
  let partnerMap = new Map();

  for (const pair of session1) {
    partnerMap.set(pair[0], pair[1]);
    partnerMap.set(pair[1], pair[0]);
  }

  for (const pair of session2) {
    if (partnerMap.get(pair[0]) === pair[1]) return true;
  }

  return false;
};

// Example(s)
// let session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
// let session2 = [["Jack", "Charles"], ["Baxter", "Davis"], ["Alice", "Daniels"]]
// console.log(hasRepeatTangoPartner(session1, session2) == false)

// session1 = [["Alice", "Baxter"], ["Charles", "Davis"], ["Jack", "Daniels"]]
// session2 = [["Jack", "Daniels"], ["Alice", "Charles"], ["Baxter", "Davis"]]
// console.log(hasRepeatTangoPartner(session1, session2) == true)

/*

Given an array of integers representing piles of rocks (e.g., *3* means *3 rocks*), modify the input array to rank the piles from 1 to N, 
representing the relative sizes of each pile of rocks from smallest to largest.
That is, the pile with the lowest count of rocks should be ranked *1*, the second lowest should be *2*, and so on.
You may use built-in functions provided by your programming language.

Example(s)
Input: [3, 4, 1]
Output: [2, 3, 1]
Explanation: The last index has the smallest pile with 1 rock, so it's ranked 1st place. The first index has the 2nd smallest pile with 3 rocks, so it's ranked 2nd place. The middle index has the 3rd smallest pile with 4 rocks, so it's ranked 3rd place.

Input: [80, 27, 55, 30, 15, 90, 10]
Output: [6, 3, 5, 4, 2, 7, 1]
Explanation:
10 -> 1
15 -> 2
27 -> 3
30 -> 4
55 -> 5
80 -> 6
90 -> 7
The last index has the smallest pile with 10 rocks, so it's ranked 1st place. The 2nd smallest pile has 15 rocks, so it's ranked 2nd place. The 3rd smallest pile has 27 rocks, so it's ranked 3rd place. So on and so forth until the 7th smallest pile has 90 rocks, so it's ranked 7th place.

Input: [2, 1]
Output: [2, 1]

[10,8,15,12,6,20,1]


input  [3, 4, 1]
result [2, 3, 1]

  Map {
    3: 0,
    4: 1,
    1: 2,
  }

  sortedMapArr: [[1,2], [3,0], [4,1]]
  
  Traverse through sortedMapArr using idx pairs:
    - Set input arr position at value to i + 1

  time: O(n)
  space: O(n)
*/

const rankPiles = (arr) => {
  let mappedArr = new Map();

  for (let i = 0; i < arr.length; i++) {
    mappedArr.set(arr[i], i);
  }

  let mapToArray = [...mappedArr]
    .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
    .map((tuplet) => tuplet[1]);

  for (let i = 0; i < mapToArray.length; i++) {
    let idx = mapToArray[i];
    arr[idx] = i + 1;
  }

  return arr;
};

// arr = [80, 27, 55, 30, 15, 90, 10];
// console.log(JSON.stringify(rankPiles(arr)) === "[6,3,5,4,2,7,1]");


