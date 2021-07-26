//requiring the head file
const assertEqual = require('../assertEqual');
const head = require('../head');

//inputting test cases
assertEqual(head(([5, 6]), 5));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

