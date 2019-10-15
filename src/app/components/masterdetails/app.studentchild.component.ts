import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Students } from './../../models/app.constants';
import { StudentChild } from './../../models/app.student.entity';
@Component({
  selector: 'app-studentchild-component',
  templateUrl: './app.studentchild.view.html'
})
export class StudentChildComponent implements OnInit {
  student: StudentChild;
  students = Students;
  tableColumns: Array<string>;
  private _CourseId: number;
  private filteredStudents: Array<StudentChild>;

  // the event that will be emitted back to parent comnponent
  // this will carry only strign data
  @Output()
  notifyBack: EventEmitter<string>;

  constructor() {
    this.student = new StudentChild(0, '', '', '', '', '', 0);
    this.tableColumns = new Array<string>();
    this._CourseId = 0;
    this.filteredStudents = Array<StudentChild>();
    this.notifyBack = new EventEmitter<string>();
  }

  // a public setter proeprty to accept data from parent
  // the input decorator will accept data using property binding
  // [CourseId]
  @Input()
  set CourseId(value: number) {
    this._CourseId = value;
    console.log(`Data recived ${this._CourseId}`);
  }

  get CourseId(): number {
    return this._CourseId;
  }

  // a public read-only property, that will filter students based on
  // CourseId received from parent. When Component is updated
  // the property will also be changed and its value willl be updated
  // back to UI
  get FilterStudents(): Array<StudentChild> {
    this.filteredStudents = Array<StudentChild>();
    if (this._CourseId > 0) {
      this.filteredStudents = this.students.filter((s, i) => {
        return s.CourseId === this._CourseId;
      });
    } else {
      this.filteredStudents = this.students;
    }
    return this.filteredStudents;
  }

  // the method that will be invoked immediately after the ctor
  ngOnInit(): void {
    // read each property from student and push it in array
    for (let c in this.student) {
      this.tableColumns.push(c);
    }
  }


  // a method that will emit an event
  onNotifyBack(): void {
    this.notifyBack.emit(`There are ${this.filteredStudents.length} students found for CourseId ${this._CourseId}`)
  }

}
