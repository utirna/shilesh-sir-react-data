/* ES6 */

/*let varOne = [100];
let varTwo = [...varOne];//immutable

varOne[0] = 60;

console.log(varOne);
console.log(varTwo);*/

// ... spreed operator

// destructure array
let array = [10, 20, 50];
//let numberOne = array[0];
//let numberTwo = array[1];

let [numberOne, numberTwo] = array; //destructure

//destructure object;

let jsObject = { name: "Deepak", age: 31 };

let { name: studentName } = jsObject; //destructure

//console.log(studentName);

// ... restParams
console.log();

function myLog(...varData) {
  var result = varData.reduce((add, currentValue) => {
    return (add += currentValue);
  }, 0);
  console.log(result);
}
myLog(10, 20, 2, 1, 1, 1, 1);
