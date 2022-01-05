---
title: 'JavaScript Data Types & Debugging Type Errors with "typeof"'
date: "2021-07-26"
---

While I started learning _JavaScript_, I faced a problem often. I've seen many of the learners facing a common problem at the beginning of learning JavaScript. I want to share that with my readers in this post.

**Data Types in JavaScript**

JavaScript recognizes:
6 _immutable_ data types: _Boolean_, _Null_, _Undefined_, _Number_, _String_ & _Symbol_.
1 type for _mutable_ items: _Object_

Let me show you an **example** first:

```js
let nine = 9; //data type : Number
let three = "3"; //data type : String

let summation = nine + three; //expected output: 9+3=12

console.log(summation); //output: 93
```

We all know that the summation of _9_ and _3_ is _12_. But here, the actual _output_ shows a different result, that is _93_, which means there must be some _error_ in the code.

The _reason_ of this wrong output is, the variable _nine_ is assigned with the value _9_ which is a _number_ and the variable _three_ is assigned with the value _3_ which is a _string_.

**A basic information about JavaScript is, when we add two and different data types with + operator , it actually concatenates them, doesn't return a summation!**

If you + two strings, it will return the _concatenation_ of them but if you + two numbers they will return the _sum_. That's why, The variable _summation_ returned a _concatenated value_ 93, not the actual _summation_ 12.

Now that we've seen this problem, let's try to solve it.
It may happen often that, maybe you're in hurry and you just mistakenly used _quotation marks ("")_ around a _number_ while assigning it to a variable. This mistake will turn the _number_ data type into a _string_ data type as we saw in the example above.

**To check why the _unexpected output_ has occurred, we can debug the problem.**

In _JavaScript_, `typeof` is useful in `debugging` while working with _multiple data types_. _typeof_ is used to check the _data structure_ or _type_ of a variable.

Type errors and unexpected outputs may occur if the data types are not similar, especially when you're accessing data in the form of _JSON (JavaScript Object Notation) Object_.

Some _examples_ of using _typeof_ while debugging are:

1. console.log(typeof " ")
2. console.log(typeof 7)
3. console.log(typeof {})
4. console.log(typeof [])

Let's see the previous **example** and how to debug it with _typeof_ :

```js
let nine = 9; //data type : Number
let three = "3"; //data type : String
let summation = nine + three; //expected output: 9+3=12

console.log(summation); //output: 93
console.log(typeof nine); //output: number
console.log(typeof three); //output string
```

Now, we can easily know where we have mistaken and simply change the _string_ to _number_.
Then everything will work as we desired.

The changed and correct _output_ will be:

```js
let nine = 9; //data type : Number
let three = 3; //data type : Number
let summation = nine + three; //output: 9+3=12
```
