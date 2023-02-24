/**
3 Levels to Algorithm Mastery

1. Understanding the Base Algorithm
    - Sort problems by topic
    - Sort by difficult, easy -> hard
    - Grind out the easy questions and try to understand them as much as you can.
    - Look at the discussion/solution to get clarity if stuck.

2. Identifying Algorithm in Questions
    - For every question you do in the above section, go to the left tab and look at the "Similar Questions" section.
    - Do every question within 1-level-higher of the similar questions.
    - Really look at the question, and try and find hints to affirm that the algorithm you used previously applies to this question.

3. Modifying Algorithm for Specific Questions
    - As you do the above questions, solve the question utilizing your previous solution and change the pieces that need to be changed.
    - Recommend NOT looking at the solution/discussion until you feel like you're at the point of (mental/emotional) failure

Study Guide:
- Copy/Paste the Question and Implementation
- Write a paragraph summary in human-readable format explaining the solution

* Keep track of the questions that you didn't do well on
    - Come back to that question a week later

A week before any of your big interviews, allocate time to do questions filtered by company/frequency
    - These will have questions you'll most likely get
    - You should be more comfortable around questions like this, that you haven't seen before
    - And you'll get more exposure around those questions
    - NOTE: I got a shit ton of those most-frequent questions in my interviews
 *
 **/
  

    /*
Justify lines of text

Given an array of words and a max length per line, return an array of strings where each string represents a fully justified line. A fully justified line means that the first letter and last letter in the line should be a letter and not a space, and extra spaces are distributed as evenly as possible.
 

EXAMPLE(S)
["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], k = 16
returns
["the  quick brown", // (2 spaces, 1 space)
"fox  jumps  over", // (2 spaces, 2 spaces)
"the   lazy   dog"]  // (3 spaces, 3 spaces)
 

FUNCTION SIGNATURE
function justify = (input: [string], max_len: int): [string]
*/


/*
Problem analysis:
- can word be longer than k? no.
- how to distribute > 1 space between each word in a line? add spaces between words left to right until line length achieved
- what to do with one last word < k on last line? add spaces to right

Possible solution(s) w/ chosen solution:
using a recursive call, we move through the array of strings
- adding a 'word' to our new working array and checking to see if the length passes k
- we also account for the natural 1 space minimum between words
if adding a new string to "working array" string passes k, we act on working array string
- distribute the necessary spaces after


justify(input, max_len): main driver function, takes in input array and max line length

helper(index, string): index of word in input, string is line built up off of consecutive words in input. (account for natural 1 space when considering check against max_len). check string against max_len when deciding to generate "final" line

add_spaces(string): ['the',quick','brown'] <- len of working string (13) max-13 = 3,  , because it has 3 words then we need 2 spacing, 3-2 ->1 extra spacing <2 -> put it in to first spacing

*/

// function helper(index, lineArray) {
//   // Return an array of words representing a single line
//   // base case: index > len(input)-1 return; 
//   // if len(linearray + input[index]) > maxlength ; golbal output.append(linearray), helper(index,liinearray=[]) 
//   // else helper(index+1,linearray+input[index])
// }

// function addSpaces(lineArray) {
//   // Distribute spaces equally between words in `lineArray`
// }


/* Solution */
function justify(input, maxLength) {

    const lines = [];
    let lineArray = [];
    let totalCharacters = 0;
    for (let i = 0; i < input.length; ++i) {
      let word = input[i];
      // If adding `word` to `lineArray` would cause us to exceed `maxLength`, don't
      // add the word
      // sum(length of all words in lineArray) + (len(lenArray) - 1)
      let nextLength = (totalCharacters + lineArray.length - 1) + (word.length + 1);
      if (nextLength > maxLength) {
        // Add to lines array
        let s = addSpaces(lineArray, totalCharacters);
        lines.push(s);
  
        // Reset working lineArray
        lineArray = [];
        totalCharacters = 0;
        i--;
      } else {
        // Add word to current working lineArray
  
        lineArray.push(word);
        totalCharacters += word.length;
      }
    } 
    
    let s = addSpaces(lineArray, totalCharacters);
    lines.push(s);
    // lines.push(lineArray);
    console.log(lines);
  
    function addSpaces(lineArray, totalCharacters) {
    // Distribute spaces equally between words in `lineArray`
    // Leftover characters = maxLength - totalCharacters
  
      // spaces distributed = spaces / (words - 1) (floor at 1)
      let spaceCount = maxLength - totalCharacters;
      // lineArray.length - 1
      let minimumSpaces = Math.floor(spaceCount / (lineArray.length - 1));
      let remainingSpaces = spaceCount % (lineArray.length - 1);
  
      let output = "";
      for (let i = 0; i < lineArray.length - 1; i++) {
        output += lineArray[i];
        output += ' '.repeat(minimumSpaces);
        if (i < remainingSpaces) {
          output += ' ';
        }
      }
      output += lineArray[lineArray.length - 1];
      return output;
  }
  }
  
  let input_array = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
  justify(input_array, 9)
  
  
  
  /* Test cases */
  
  // returns
  // ["the quick", // 1 space
  //  "brown fox", // 1 space
  //  "jumps    ", // 4 spaces
  //   "over  the", // 2 spaces
  //  "lazy  dog"] // 2 spaces
  
  /*
  def addSpaces(linearray):
    output=[]
    spacing_allocate=[]
  
    for line in linearray:
      words_size = len(line) #3
      combined_line = ('').join(line) # 13
      size = len(line) # current length in a line (without  natrual spacing)
      spacing = k - size  # 16-13 = 3
      remain_spacing = spacing
      need_spacing_charater = words_size-1
  
      if spacing % need_spacing_charater ==0:
        for _ in range(need_spacing_charater)
          spacing_allocate.append(spacing/need_spacing_charater)
      else:
        spacing_needed = need_spacing_charater
        for _ in range(need_spacing_charater)
          
          current_space = math.ceiling(remain_spacing/spacing_needed)
          remain_spacing = remain_spacing - current_space
          spacing_allocate.append(current_space)
          spacing_needed -=1
      idx = 0
      tmp = ''
      for word in line:
        tmp += word
        if idx < len(spacing_allocate):
          for i in range(spacing_allocate[idx]):
          tmp +=string(' ')
        
        output.append(tmp)
    
  
  
        return output
  
      
      
  
      
  */
  