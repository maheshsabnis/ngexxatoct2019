import { Component, OnInit } from '@angular/core';
import { Students } from '../../models/app.constants';
import { StudentChild } from '../../models/app.student.entity';
import { CommunicationService } from '../../services/app.communication.service';
@Component({
  selector: 'app-studentreceiver-component',
  templateUrl: './app.studentreceiver.view.html'
})
export class StudentReceiverComponent implements OnInit {
  student: StudentChild;
  students = Students;
  tableColumns: Array<string>;
  CourseId: number;
  FilterStudents: Array<StudentChild>;

  // inject the service
  constructor(private serv: CommunicationService) {
    this.student = new StudentChild(0, '', '', '', '', '', 0);
    this.tableColumns = new Array<string>();
    this.CourseId = 0;
    this.FilterStudents = Array<StudentChild>();
    this.FilterStudents = this.students;
  }



  // the method that will be invoked immediately after the ctor
  // subscribe to the service and its event to receive the data
  // this will be one time subscription
  ngOnInit(): void {
    // read each property from student and push it in array
    for (let c in this.student) {
      this.tableColumns.push(c);
    }

    this.serv.notifyValue.subscribe(param => {
      this.CourseId = param;

      if (this.CourseId > 0) {
        this.FilterStudents = this.students.filter((s, i) => {
          return s.CourseId === this.CourseId;
        });
      } else {
        this.FilterStudents = this.students;
      }
    });

  }



}
