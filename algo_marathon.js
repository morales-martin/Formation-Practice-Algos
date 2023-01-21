// """
// we are given a process that takes in commands as binary strings (strings containing of "1" and "0")
// we know all of the possible commands before the process starts up.
// create autocomplete functionality for this process!

// commands: ["10110", "10011", "00110", "11011"]
// "10" -> ["10110", "10011"]

/*
 N commands
 C characters long on average
 M max number of characters (length of the longest command)
 2^(M) + 2(M-1) + ... keys
 each command is on average C characters long, so will have C prefixes in the cache
 N commands => C*N keys
 each of these keys is up to C characters long (C/2) => space needed for keys is O(C^2 * N) 
*/

class Autocomplete {
  constructor(commands) {
    this.cache = new Map();
    this.commands = commands;
  }

  run(prefix) {
    if (this.cache[prefix]) {
        console.log("cached!")
      return this.cache[prefix];
    }

    for (let command of this.commands) {
      if (prefix.length < command.length) {
        let command_substring = command.substring(0, prefix.length);
        if (command_substring === prefix) {
          if (!this.cache[prefix]) {
            this.cache[prefix] = [command];
          } else {
            this.cache[prefix].push(command);
          }
        }
      }
    }

    return this.cache[prefix];
  }
}

ac = new Autocomplete(["10110", "10011", "00110", "11011"])
console.log(ac.run("10"))
console.log(ac.run("101"))
console.log(ac.run("10"))

// """
// prefix trie
// """

/*
Question : 

You are given a series of inputs representing delivery events. Each event is represented by an array of length 3:
[1, 1591846068, 0]
1.The first element is an order number
2.The second is the timestamp
3.The third is either 0 (representing a pickup) or 1 (representing a dropoff)

Given a series of events, return the total active time, calculated by the period of time where they have an active delivery (if they've dropped everything off, they are not considered active until they pick something up again).


Input:
[1, 1591846068, 0]
[2, 1591846070, 0]
[1, 1591846071, 1]
[2, 1591846080, 1]
[3, 1591846090, 0]
[3, 1591846102, 1]

Output: 24

Edge cases/Assumptions
1. overlapping timestamps for different order numbers (timestamps are unique)
2. Input is valid (**to be revisited)

Follow-up constraints : 
1. what if timestamps are not in increasing order ? 
2. What if the dropoff is incorrect number of times ? Let's say its dropped off 2 times 
3. What if pickup occurs twice before being dropped ?
4. What if dropoff occurs before pickup ?  

Approach : 
1. 
  set timestamp = null, activeDeliveries = 0, result = 0 variables
  iterate through inputs, 
    if input[2] is 0 AND activeDeliveries is 0, set timestamp to input[1]
    increment activeDeliveries
    if input[2] is 1, decrement activeDeliveries
      if activeDeliveries is 0, then get the differnece of input[1] and timestamp and add it to result. then set timestamp = null
  return result


Follow-up
1. Gas stations. (https://leetcode.com/problems/gas-station/)
2. Maximum sum possible in an array. (consider linear and circular array)
3. Maximum product possible in an array .
Greedy algorithms 
Read more on kadane algorithm
*/



function activeDeliveries(deliveries) {
  let activeDeliveries = 0
  let result = 0
  let timestamp = null

  deliveries = deliveries.sort((a,b) => a[1] - b[1]);
  // console.log(deliveries);

  for (let delivery of deliveries) {
    if (delivery[2] === 0) {
      if (activeDeliveries == 0) {
        timestamp = delivery[1]
      }
      activeDeliveries++
    } else if (delivery[2] === 1) {
      activeDeliveries--
      if (activeDeliveries == 0) {
        result += (delivery[1] - timestamp)
        timestamp = null
      }
    }
  }

  return result
}

const deliveries1 = [
  [1, 1591846068, 0],
  [2, 1591846070, 0],
  [1, 1591846071, 1],
  [2, 1591846080, 1],
  [3, 1591846090, 0],
  [3, 1591846102, 1]
];

const deliveries2 = [
  [3, 1591846102, 1],
  [1, 1591846068, 0],
  [1, 1591846071, 1],
  [1, 1591846072, 1],
  [2, 1591846070, 0],
  [2, 1591846080, 1],
  [3, 1591846090, 0]
  
];


console.log(activeDeliveries(deliveries2), 24);
console.log(activeDeliveries([]), 0);

// Time complexity : O(N)
// Space complexity : O(1)

//Time compexity for this case : O(NLOGN)
// Space complexity : O(1)

 /**
Problem Statement
A Toeplitz matrix is one where all elements along diagonals from top left to bottom right are the same. Given a matrix, return true if it is a Toeplitz matrix and false otherwise.
**/

function isToeplitz(input) {
  for(let i = 0; i < input.length - 1; i++) {
    if(!isDiagonalUniform(input, 0, i)) return false // col check
    if(!isDiagonalUniform(input, i, 0)) return false // row check
  }

  return true
}

function isDiagonalUniform(input, row, col) {

  let value = input[row][col];

  while(row < input.length && col < input.length) {
    if(input[row][col] !== value) return false

    row++
    col++
  }

  return true
}


