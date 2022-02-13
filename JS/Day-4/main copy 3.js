/* ES6 */
class Student {
  constructor(sl) {
    this.studentName = sl;
  }
  //properties
  //this  represent current instance of class

  static printStudent() {
    console.log("Hello");
  }
} // class a collection of props & methods

let studentList = [10, 20, 30, 40];
let student = new Student(studentList);

Student.printStudent(); // utilities
// static methods
