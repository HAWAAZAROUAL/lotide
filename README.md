# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @HAWAAZAROUAL/lotide`

**Require it:**

`const _ = require('@HAWAAZAROUAL/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first elements from an array and not the rest.
* `tail(...)`: returns all elements of an array except the first one.
* `middle(...)`: returns the single element from an oddly lengthed array, and the two middle elements from an evenly lengthed array.
* `eqArrays(..)`: tests for a perfect match between two arrays.
* `assertEqual(...)`: returns a message with Assertion Passed/ Failed if the function used with it behaves as expected or not.
* `assertArraysEqual(...)`: makes use of eqArrays to test if your function is working to test if two arrays match.
* `assertObjectsEqual(...)`: returns an Assertion Passed/failed message if two inputted objects match or don't match.
* `countLetters(...)`: this function takes in a string and returns a count of how many time each letter occurs throughout the string.
* `countOnly(...)`: this function takes in a group of items, finds the wanted items, and returns the count of how many of those items there are.
* `eqObjects(...)`: returns true or false if two objects are a match.
* `findkey(...)`: this function takes in two parameters. It scans the object inputted and returns the first key that the callback returns a truthy value. If no key is found, it should return undefined.
* `findKeyByValue(...)`: goes through an object by searching through the key values to find the value with the key we're looking for.
* `letterPositions(...)`: this function returns the Index position where each letter of a string is located, including multiple positions.
* `map(...)`: this function outputs a new array based on the results of the callback function.
* `takeUntil(...)`: this function collects all items until it returns the truthy value
* `without(...)`: this function removes unwanted elements from the array and uses * assertArraysEqual to test the functionality of your function!