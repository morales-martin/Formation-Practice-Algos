function isValid(s) {
  let stack = 0;

  for (let c of s) {
    if (c === "(") stack++;
    if (c === ")") stack--;
    if (stack < 0) return false;
  }

  return stack === 0;
}

var removeInvalidParentheses = function (s) {
  let read = [s];
  let nextLevel = [];
  const resultSet = new Set();

  while (read.length && resultSet.size === 0) {
    // For each string at this level (number of edits from original)
    for (let i = 0; i < read.length; i++) {
      const candidate = read[i];

      if (isValid(candidate)) {
        resultSet.add(candidate);
      } else if (resultSet.size === 0) {
        // If we still haven't found a valid string, then put all of the possible
        // strings with one fewer into the nextLevel list.
        for (let j = 0; j < candidate.length; j++) {
          if (candidate[j] === "(" || candidate[j] === ")") {
            const next = candidate.substr(0, j) + candidate.substr(j + 1);
            nextLevel.push(next);
          }
        }
      }
    }
    read = nextLevel;
    nextLevel = [];
  }

  return [...resultSet];
};

/*

                [1,2,3]
        [2,3]  [3,1] [2,1]
     [3]  [2]  [3][1] [2] [1]

Recursive function
base case = 1 single element in array

Recursive call
    for(i:0-length -1 )
        let firstEle = arr.shift()
        let permurations = recursive(arr)
    
        for(perm in permutations)
            perm.append(firstEle)
            results.add(perm)
        
        arr.push(firstElement)
    
    return results


*/

function getAllPermutations(array) {
    let results = []
    if(array.length === 1) return [array.slice()]

    for(let i = 0; i < array.length; i++) {
        let firstElement = array.shift()
        let permutations = getAllPermutations(array)

        for(let perm of permutations) {
            perm.push(firstElement)
            results.push(perm)
        }

        array.push(firstElement)
    }
    return results
}

function get_permutations(input){
  //global result
  let result = []
  // create a helper function
  function helper(idx,input){
    //base case 
    if(idx === input.length){
      result.push(input.slice())
      return
    }
    for (let j = idx ; j < input.length; j++){
      [input[idx], input[j]] = [input[j],input[idx]];
      helper(idx + 1 , input);
      [input[idx], input[j]] = [input[j], input[idx]];
    }

  }
  helper(0,input)
  return result

}

function get_permutations2(input){
  let allPermutations = []

  function helper(idx = 0 , path = []){
    console.log("path", path)
    console.log("------------")
    if(path.length > input.length){
        return
    }
    allPermutations.push(path.slice())
    for(let i = idx ; i < input.length ;i++ ){
      // i = 0 , [1, 2 , 3 ]
        if(!path.includes(input[i])){
          path.push(input[i])
          console.log("after push", path)
          console.log("----------------")
          helper(i + 1, [...path])
          path.pop()
          console.log("after pop", path)
        }
    }

  }
  helper()
  return allPermutations
}


// function getAllSubsequences(s) {
//     let result = []
//     function helper(s,prefix="") {
//         if(s.length === 0) return result.push(prefix)
    
//         let firstChar = s[0]
//         let string = s.substr(1)
//         helper(string,prefix)
//         helper(string,prefix+firstChar)
//     }

//     helper(s)
//     return result
// }

function getAllSubsequences(s) {
  let result = []
  function helper(index = 0, subset="") {
    if(index > s.length) return

    result.push(subset.substring(0))

    for(let i = index; i < s.length; i++) {
      subset += s[i]
      helper(i+1, subset)
      subset = subset.slice(0,subset.length-1)
    }
  }

  helper()
  return result
}

console.log(getAllSubsequences("123"))


function sumList(list) {
  let sum = 0
  for(let int of list) {
      sum += int
  }
  
  return sum
}

var combinationSum = function(candidates, target) {
  let results = []
  
  function helper(idx = 0, sub = []){
      if(sumList(sub) > target || idx >= candidates.length) return;
      
      if(sumList(sub)===target){
        results.push([...sub])
        return ;
      }

      sub.push(candidates[idx]);
      helper(idx, sub); // add same element
      sub.pop();
      helper(idx+1,sub); // add next element
  }
  helper();
  return results;
};

/*
Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
You may return the answer in any order.
*/
var combine = function(n, k) {  
  let results = []
  
  function helper(index = 1, subset = []) {        
      if(subset.length === k) return results.push([...subset])
      
      for(let i = index; i <= n; i++) {
          subset.push(i)
          helper(i + 1, subset)
          subset.pop()
      }
  }
  
  helper()
  return results
  
};

/*
Given three students, who will refer to as “A”, “B”, and “C”, return an array representing all the combinations that they can sit in three seats.
*/

function seatCombo(seats) {
  function seatComboHelper(available, taken) {

    //Base case
    if(available.length === 0){ // or if taken.length === seats.length
      console.log(taken);
    }

    for(let i = 0; i < available; i++) {
      seatComboHelper(available.substring(0, i) + available.substring(i+1, available.length), taken + available[i]);
    }
  }
  seatComboHelper(seats, "")

}
"abc"

function seatCombo2(seats) {
  function seatComboHelper(available, taken) {

    //Base case
    if(available.length === 0){ // or if taken.length === seats.length
      console.log(taken);
    }

    for(let i = 0; i < available.length; i++) {
      taken += available[i];  
      seatComboHelper(available.substring(0, i) + available.substring(i+1, available.length), taken);
      taken = taken.substring(0, taken.length - 1)
    }
  }
  seatComboHelper(seats, "")
}