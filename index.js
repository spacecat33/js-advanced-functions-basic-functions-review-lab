
// saturdayFun

function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
};


// mondayWork
const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
};

// wrapAdjective
function wrapAdjective(adjective="*") {
    return function(inner="special") {
        return `You are ${adjective}${inner}${adjective}!`;
    };
};

//  calculator

const Calculator = {                      // calculator is capitalized because it is an object
    add: function(num1, num2) {
        return num1 + num2
    },
    subtract: function(num1, num2) {
        return num1 - num2
    },
    multiply: function(num1, num2) {
        return num1 * num2
    },
    divide: function(num1, num2) {
        return num1 / num2
    }
}  

// actionApplyer

function actionApplyer(integer, array) {
    let num = integer
    for (let i = 0; i < array.length; i++) {
        num = array[i](num);
    };
    return num;
};



// Defines a function called actionApplyer
// 10) exists
// receives two arguments: a starting integer and an array of functions
//   11) returns the given starting point, unchanged, when the array is empty
//   12) Given 13, returns 4 after being acted on by several functions