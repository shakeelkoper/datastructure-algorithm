/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */
/**
 * @param {string}
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
            return Math.max(max, i - left + 1);
    }, 0);
}

console.log(lengthOfLongestSubstring('pwwkewsspodftt'));

