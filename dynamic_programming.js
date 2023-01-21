/*

    # Longest Common Subsequence

    s1 = ["A", "C", "A", "D", "B", "F", "E", "C", "A", "A"]
    s2 =      ["C", "B", "D", "A", "E", "F", "E", "D"]  


    recursed = 0
    def longestCommonRecursive(s1, s2, m, n):
        # key  = (m, n)
        # if table.get(key) 
        global recursed
        recursed += 1
        # base case: empty string(s)
        if m == 0 or n == 0:
            return 0
        
        # increment match and continue
        if s1[m - 1] == s2[n - 1]:
            return longestCommonRecursive(s1, s2, m - 1, n - 1) + 1
        
        # pick highest count so far (starting from end)
        return max(
            longestCommonRecursive(s1, s2, m, n - 1), 
            longestCommonRecursive(s1, s2, m - 1, n)
        )

    print(longestCommonRecursive(s1, s2, len(s1), len(s2)))
    print("recursive count " + str(recursed))

    def longestCommon(s1, s2):
        cache = []
        # Creating the table purely in terms of size
        for _ in range(len(s1) + 1):
            cache.append([None] * (len(s2) + 1))
        
        # Zero out the first row
        cache[0] = [0] * (len(s2) + 1)

        # Zero out the first column
        for j in range(len(s1)+1):
            cache[j][0] = 0

        iteration_count = 0
        for y, left in enumerate(s1, 1):
            for x, top in enumerate(s2, 1):
                iteration_count += 1
                if left == top:
                    diag = cache[y-1][x-1]
                    cache[y][x] = diag + 1
                else:
                    up = cache[y-1][x]
                    prev = cache[y][x - 1]
                    cache[y][x] = max(up, prev)
        
        print("iterations: " + str(iteration_count))
        return cache[len(s1)][len(s2)]

    print(longestCommon(s1, s2))
        

    /*

    A common subsequence is a string that is a valid subsequence of each of the input strings. Given two strings, return the length of the longest possible common subsequence between the two strings.

    "abcvb"
    "anbnvcb"
    -> "abc" "vb" "abcb", 'abvb'

    "ab"
    "acb"

    -Null, empty string,  no common subsequence input -> 0
    -If more than one subsequence with max length, return length of either

    p
    "ab"
    "acb" => "ab", 2
    p

    array for first string subsequences 
    array for second string subsequences

    'a' => ['', 'a'] 2
    'ab' => ['', 'a', 'b', 'ab'] 4
    'abc' => ['', 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'] 8
    O(2^n), where is n is the number of chars in longest of two strings

        ''
        /    \ 
    'a'     ''
    /  \    /  \
    'ab' 'a' 'b' ''

    Backtracking
    get all possible subsequences of first string
    get all possible subsequences of second string

    -initialize variable tracking max sub length
    compare two arrays to find common subsequences
    -while we're comparing, have a max subsequence length and update when there a longer subsequence

    return the max length variable

        'a b c d e f'
    ''    0
    'a'   1
    'ac'  2
    'ack' 2
    'b'  
    a.  1 1 
    ''a b c d
    ''0 0 0 0 0
    b 0 0 1 1 1
    a 0 1 1 1 1
    c 0 1 1 2 2

    'ac'
    'bc'


    0. length = 2
    1. find shortest string
    2. Examine every character in shortest string 
    3. while examining, check if current character is in other string
    3a. If it is, start counting length of subsequence
    3b. If it isn't, move on to next character in shortest string




    */

/*
    Q. Given weights and values of items, put these items in a knapsack of capacity c to get the maximum total.

    Note:
    • You are given two array of integers values and weights which represent values and weights of given items respectively and c which represents knapsack capacity.
    • Compute the maximum value subset of values such that sum of the weights of this subset does not exceed c.
    • You cannot include a fraction of an item nor include the same item multiple times. 

    Example:
    • Given: values = [6, 9, 13], weights = [1, 2, 3], c = 5 // returns 22
    • Note: 9 + 13 (weight: 2 + 3 <= 5)

    */

function knapsack(limit, items) {}

// console.log(0, knapsack(0, []));
// console.log(0, knapsack(0, { 1: 6, 2: 9, 3: 13 }));
// console.log(22, knapsack(5, { 1: 6, 2: 9, 3: 13 }));
// console.log(43, knapsack(10, { 1: 6, 2: 10, 3: 12, 4: 15, 5: 1 }));

/*

                You are given coins of different denominations and 
                a total amount of money. Write a function to compute 
                the number of combinations that make up that amount.

    Function Signature 
    func coinChangeCombinations(coins: [Int], amount: Int) -> Int

    Target runtime and space complexity
    Runtime: O(mn), where n = # different coin denominations and m = amount.

    Examples:
    Amount = 5

    [1,2,5] amount=5


      0 1 2 3 4 5
    0 1 0 0 0 0 0 
    1 1 1 1 1 1 1
    2 1 1 2 2 3 3
    5 1 1 2 2 3 4

    */

const coinChangeCombinations = (coins, amount) => {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i >= coin) {
        dp[i] += dp[i - coin];
      }
    }
  }

  return dp[dp.length - 1];
};

console.log(coinChangeCombinations([1, 2, 5], 5));

/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.
Find the maximum profit you can achieve. You may complete at most two transactions.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

[3,3,5,0,0,3,1,4]
max = 2
  
  0 1 2 3 4 5 6 7
0 0 0 0 0 0 0 0 0 
1 0 0 2 2 2 3 3 4 
2 0 0 2 2 2 5 5 6 


*/

var maxProfit = function (prices, k = 2) {
  let dp = Array(k + 1)
    .fill()
    .map(() => Array(prices.length + 1).fill(0));

  for (let transaction = 1; transaction <= k; transaction++) {
    for (let sell = 1; sell < prices.length; sell++) {
      let maxProfit = 0;

      for (let buy = 0; buy < sell; buy++) {
        maxProfit = Math.max(
          maxProfit,
          prices[sell] - prices[buy] + dp[transaction - 1][buy]
        );
      }

      dp[transaction][sell] = Math.max(maxProfit, dp[transaction][sell - 1]);
    }
  }

  return dp[dp.length - 1][dp[0].length - 2];
};

// console.log(maxProfit([2, 1, 3, 4])); // 3
// console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 6
// console.log(maxProfit([1, 2, 3, 4, 5])); // 4
// console.log(maxProfit([7, 6, 4, 3, 1])); // 0
