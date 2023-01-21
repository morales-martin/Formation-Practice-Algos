/*

# Ramp Challenge

Thanks for applying to Ramp. Solve this CTF[*] challenge and add the result to your application.

## Instructions

1. Write a function to decode the following string.

- Valid characters are expressed by this Regex: `/[-./0-9:a-z]/`
- _Hint: It's a URL!_
- This is **NOT** the flag

```
104 052 150 074 164 114 102 175 164 130 160 163 122 053 046 047 072 046 104 105 103 137 057 122 057 110 176 113 131 167 053 115 131 073 132 147 116 174 117 047 107 147 065 107 045 042 137 062 062 160 167 117 111 151 050 111 166 102 115 106 106 150 133 121 166 132 173 151 101 052 065 107 147 125 161 123 125 111 173 113 163 126 046 104 130 105 156 104 121 101 066 044 111 067 126 065 147 042 116 110 164 105 053 150 063 110 105 100 052 175 161 060 075 074 157 127 100 100 117 164 111 074 144 126 075 132 112 136 152 103 110 132 077 141 043 176 041 056 174 132 127 154 103 050 077 107 141 117 114 054 135 111 155 054 132 130 142 117 076 176 176 144 141 074 055 104 132 175 126 133 165 074 174 051 162 120 114 135 154 124 105 056 133 104 175 076 165 123 163 102 110 103 136 133 055 110 127 175 136 145 043 175 043 141 163 164 176 055 061 110 054 103 132 056 107 100 110 157 117 073 156 056 121 125 137 141 112 123 041 130 050 167 076 127 107 075 042 163 074 104 101 104 057 041 110 066 052 126 071 066 115 144 074 176 042 067 060
```

2. Use the decoded URL from step 1 to capture the flag!
3. Create a CodeSandbox React application
4. Store the obtained flag in step 2 as a variable
5. Render the decoded string from step 1 with the following conditions:
   - Simulate a typewriter effect with a half second delay between each character. _Start showing nothing and then display characters one by one until the full string is displayed_
   - Render as a list, where each character is a list item
   - Animation should trigger when you load the page
   - Use the function you wrote for step 1 to load the decoded string into the React component
   - Animation should only run once
   - No style required
   - Use React APIs only. Don't use CSS or external libraries
6. When animation from step 5 finishes, render the flag you captured in step 2 on top of the list rendered in step 5

## Submission

Paste the flag you captured in step 2 and the link to your CodeSandbox in the job application with the following format:

`<FLAG> - <LINK>`

We're aware answers here might eventually be leaked and we'll probably have to refresh this every couple months or so, but please keep in mind it'll be very easy to tell once that happens and will only result in slowing down our ability to process applications - so please keep the result to yourself.

\[\*\]: https://en.wikipedia.org/wiki/Capture_the_flag_(cybersecurity)

*/


function decode(str) {
    let arr = str.split(' ');

    let max = -Infinity;
    let min = Infinity;
    for(let ele of arr) {
        max = Math.max(parseInt(ele), max)
        min = Math.min(parseInt(ele), min)
        console.log(parseInt('h'))
    }

    console.log(max, min)
}

decode('104 052 150 074 164 114 102 175 164 130 160 163 122 053 046 047 072 046 104 105 103 137 057 122 057 110 176 113 131 167 053 115 131 073 132 147 116 174 117 047 107 147 065 107 045 042 137 062 062 160 167 117 111 151 050 111 166 102 115 106 106 150 133 121 166 132 173 151 101 052 065 107 147 125 161 123 125 111 173 113 163 126 046 104 130 105 156 104 121 101 066 044 111 067 126 065 147 042 116 110 164 105 053 150 063 110 105 100 052 175 161 060 075 074 157 127 100 100 117 164 111 074 144 126 075 132 112 136 152 103 110 132 077 141 043 176 041 056 174 132 127 154 103 050 077 107 141 117 114 054 135 111 155 054 132 130 142 117 076 176 176 144 141 074 055 104 132 175 126 133 165 074 174 051 162 120 114 135 154 124 105 056 133 104 175 076 165 123 163 102 110 103 136 133 055 110 127 175 136 145 043 175 043 141 163 164 176 055 061 110 054 103 132 056 107 100 110 157 117 073 156 056 121 125 137 141 112 123 041 130 050 167 076 127 107 075 042 163 074 104 101 104 057 041 110 066 052 126 071 066 115 144 074 176 042 067 060')