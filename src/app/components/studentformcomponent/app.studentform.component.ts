import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/app.student.model';
import { Courses, CourseYear, Universities } from '../../models/app.constants';
import { StudentLogic } from '../../models/app.student.logic';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StringDataValidator } from './app.custom.validator';


@Component({
  selector: 'app-studentform-component',
  templateUrl: 'app.studentform.component.view.html'
})
export class StudentFormComponent implements OnInit {
  student: Student;
  private logic: StudentLogic;
  students: Array<Student>;
  headers: Array<string>;
  // the FormGroup
  frmStudent: FormGroup;
  // locally store data from constant arrays
  courses = Courses;
  couresYear = CourseYear;
  universities = Universities;
  constructor() {
    this.student = new Student(0, '', '', '', '');
    this.logic = new StudentLogic();
    this.students = new Array<Student>();
    this.headers = new Array<string>();

    // define an instance of FormGroup, by passing
    // formControl Collectoin to it that is mapped with
    // public property from Student Class
    // 'FormControlName': new FormControl(Property, validation)
    this.frmStudent = new FormGroup(
      {
        StudentId: new FormControl(this.student.StudentId,
          Validators.compose([Validators.required, Validators.minLength(2),
          Validators.maxLength(6), Validators.pattern('[0-9]+')])),
        StudentName: new FormControl(this.student.StudentName,
           Validators.compose([StringDataValidator.checkFirstCharacterUpperCase])),
        Course: new FormControl(this.student.Course),
        Class: new FormControl(this.student.Class),
        University: new FormControl(this.student.University)
      }
    );



  }
  // this method will be invoked immediately after the constructor
  // write all logic in this method that you cannot or do not want to write in ctor
  // such logic if written in ctor may delay ctor execution and hence reduce performance
  ngOnInit(): void {
    this.students = this.logic.getStudents();
    // tslint:disable-next-line: forin
    for (let h in this.student) {
      this.headers.push(h);
    }
  }
  // reset the student object
  clear(): void {
    this.student = new Student(0, '', '', '', '');
  }
  save(): void {
    this.student = this.frmStudent.value;
    this.students = this.logic.addStudent(this.student);
  }
  getSelectdValue(s: Student): void {
    // create a blank object, copy data from s into blank object
    // assin this newly generated object to this.student
    this.student = Object.assign({}, s);
  }
}
