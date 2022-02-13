/* ES6 */
class StudentParent {
  constructor(sl) {
    this.studentName = sl;
  }
  printStudent() {
    console.log(this.studentName);
  }
}

class Student extends StudentParent {
  constructor(sl) {
    super(sl);
  }
}

let studentList = [10, 20, 30, 40];
let student = new Student(studentList);
student.printStudent();

// static methods
