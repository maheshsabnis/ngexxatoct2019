import { Student } from './app.student.model';
export class StudentLogic {
  private students: Array<Student>;
  constructor() {
    this.students = new Array<Student>();
    this.students.push(new Student(101, 'Ajay', 'Ortho', 'First', 'ABC'));
    this.students.push(new Student(102, 'Nishant', 'Pathology', 'Second', 'PQR'));
  }

  getStudents(): Array<Student> {
    return this.students;
  }

  addStudent(std: Student): Array<Student> {
    this.students.push(std);
    return this.students;
  }
}
