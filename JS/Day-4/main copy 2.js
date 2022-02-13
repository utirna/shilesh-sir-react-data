/* ES6 */
class Student {
  constructor(sl) {
    this.studentName = sl;
  }
  //properties
  //this  represent current instance of class

  printStudent() {
    console.log(this.studentName);
  }
} // class a collection of props & methods

let studentList = [10, 20, 30, 40];
let student = new Student(studentList);
student.printStudent();
//window.alert("Hello");

console.log("Hello");
let list = [100, 200, 300, 400];
let studentTwo = new Student(list);
studentTwo.printStudent();
