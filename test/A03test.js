// This file tests our application code - open this file in a browser to see the test results. 

// It uses QUnit, a unit testing library for JavaScript. 

// Unit testing is a common, professional practice. 

// It helps us verify our code is correct in all cases.

// To complete this assignment, go to the end of this file, and uncomment the last 5 tests. 

// Refresh.  You will see several failing tests. 

// Modify the code in your appplication (W03.js) to get these tests to pass. 

// References: 
// https://qunitjs.com/
// https://www.sitepoint.com/getting-started-qunit/
// http://jsbin.com/tusuvixi/1/edit?html,js,output


// The following is a helpful summary of all the QUnit asserts: 

//deepEqual(value, expected[, message]): A recursive, strict comparison that works on all the JavaScript types. The assertion passes if value and expected are identical in terms of properties, values, and they have the same prototype;
//equal(value, expected[, message]): Verify the value provided is equal the expected parameter using a non-strict comparison (==).
//notDeepEqual(value, expected[, message]): Same as deepEqual() but tests for inequality;
//notEqual(value, expected[, message]): Same as equal() but tests for inequality;
//propEqual(value, expected[, message]): A strict comparison of the properties and values of an object. The assertion passes if all the properties and the values are identical;
//strictEqual(value, expected[, message]): Verify the value provided is equal to the expected parameter using a strict comparison (===);
//notPropEqual(value, expected[, message]): Same as propEqual() but tests for inequality;
//notStrictEqual(value, expected[, message]): Same as strictEqual() but tests for inequality;
//ok(value[, message]: An assertion that passes if the first argument is truthy;
//throws(function [, expected ] [, message ]): Test if a callback throws an exception, and optionally compare the thrown error;

// ******************************************************************************
// To complete, (1) uncomment the code below.
// (2) Complete your application code (W03.js) so all these tests pass also.
// ******************************************************************************


QUnit.test('Testing the new add function with four sets of inputs', function (assert) {
    assert.equal(calculateBmi1(1.6, 59), 23, "Success");
   // assert.equal(calculateBmi1(1.7, 109), 38, "Success");
    

    //assert.equal(calculateBmi1(0, 59), 0, "Success");
    //assert.equal(calculateBmi1(1.6, 0), 0, "Success");
   // assert.equal(App.add(-3, -3, -2), -8, "works with three negative integers");
    //assert.equal(App.add(2.5, 2.5, 2.5, 2.5), 10, "works with four positive real numbers");
    //assert.equal(App.add(10, -10), 0, "works with a positive and a negative");
});

// QUnit.test('Testing the new square function with four sets of inputs', function (assert) {
//     assert.equal(App.square(2), 4, "works with a positive number");
//     assert.equal(App.square(-3), 9, "works with a negative number");
//     assert.equal(App.square(0), 0, "works with zero number");
//     assert.throws(function () { App.square(null); }, new Error('The given argument is not a number'), "correctly raises an error if one tries to square a null");
// });






