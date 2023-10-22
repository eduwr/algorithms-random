Certainly! Here's a coding challenge for you: **"Transform an Infix Expression into a Binary Expression Tree."**

**Problem Description:**

You are given a mathematical expression in infix notation as a string, and your task is to create a binary expression tree that represents the expression. The expression may contain the following operators: "+", "-", "*", "/", as well as parentheses for grouping. 

Your goal is to implement a function that parses the infix expression and constructs a binary tree where each node is an operator, and the leaf nodes are operands. The tree should represent the correct order of operations.

**Example:**

Input: `"2 + 3 * 4"`

Output:

```
    +
   / \
  2   *
     / \
    3   4
```

**Challenge Requirements:**

1. You need to implement a function, let's call it `constructExpressionTree`, that takes an infix expression as a string and returns the root of the binary expression tree.

2. You should correctly handle the order of operations (e.g., multiplication and division have higher precedence than addition and subtraction).

3. Parentheses should be correctly evaluated to determine the order of operations.

4. The binary tree should be constructed such that the leaves are operands (numbers) and internal nodes are operators.

5. Your code should be able to handle expressions with different operators and operands, including single-digit or multi-digit numbers.

**Optional Challenges:**

1. Extend the challenge to handle unary operators (e.g., "-3" should be allowed).

2. Implement functions to perform a postorder traversal of the constructed tree to evaluate the expression.

This challenge will require you to parse the input expression, manage operator precedence and associativity, and construct a binary tree to represent the expression. It's a great way to practice parsing and tree construction in the context of mathematical expressions.