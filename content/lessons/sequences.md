---
title: Numerical Sequences
slug: sequences-1
---
Sequences are a useful tool to help us ease into Calculus.
We can do a lot of things with sequences, so hopefully we will be able to understand basic concepts with those.
We will be able to re-use those concepts when we will want to study functions.

# Basic concepts
## Definition and examples
A sequence is a list of real numbers. Each number is associated with a positive integer.
For example,
* If you have funds on a saving account and you let the interest rate compound, you can denote each element of the sequence as the balance at the end of the nth year.
* Geometrically, if you have a circle of radius 1 and you define a regular polygon of `n` sides inscribed in this circle, you can study the sequence of the length of all sides for each `n`. (Let's say n begins at `3` otherwise it doesn't make too much sense).

## Expressions
Most of the sequences can be expressed in two different ways:
* Either *recursively*, which means that the value at step `n` is expressed by a function of the previous steps values. Most often it is defined as a function of the previous value. Sometimes it is defined with more than one previous value.
* Or *directly*, which means that you have a direct formula to compute the value at step `n`.

For example, in our compounded interest example, we can express the sequence in both ways:
* *recursively*, with $A_n = A_{n-1}*{1+r}$
* *directly*, with $A_n = A_0*(1+r)^n$

