# [Find the Celebrity](https://www.geeksforgeeks.org/the-celebrity-problem/)

Suppose you are at a party with `n` people (labeled from `0` to `n - 1`) and among them, there may exist one celebrity. The definition of a celebrity is that all the other `n - 1` people know him/her but he/she does not know any of them.

You need to find the celebrity (or verify there is not one) by asking as few questions as possible. We can only ask questions like “does A know B?“

You are given a helper function `knows(a, b) -> bool` which tells you whether A knows B. Implement a function `findCelebrity(n) -> int`, your function should minimize the number of calls to `knows`.
Note: There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.