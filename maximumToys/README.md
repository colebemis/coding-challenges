# [Mark and Toys](https://www.hackerrank.com/challenges/mark-and-toys/problem)

Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.

Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? For example, if _prices = [1, 2, 3, 4]_ and Mark has _k = 7_ to spend, he can buy items _[1, 2, 3]_ for _6_, or _[3, 4]_ for _7_ units of currency. He would choose the first group of _3_ items.

## Function Description

Complete the function maximumToys in the editor below. It should return an integer representing the maximum number of toys Mark can purchase.

maximumToys has the following parameter(s):

* prices: an array of integers representing toy prices
* k: an integer, Mark's budget

## Input Format

The first line contains two integers, _n_ and _k_, the number of priced toys and the amount Mark has to spend.
The next line contains _n_ space-separated integers _prices[i]_

## Constraints

_1 <= n <= 10^5_

_1 <= k <= 10^9_

_1 <= prices[i] <= 10^9_

A toy can't be bought multiple times.

## Output Format

An integer that denotes the maximum number of toys Mark can buy for his son.

## Sample Input

```
7 50
1 12 5 111 200 1000 10
```

## Sample Output

```
4
```

## Explanation

He can buy only _4_ toys at most. These toys have the following prices: _1_, _12_, _5_, _10_.