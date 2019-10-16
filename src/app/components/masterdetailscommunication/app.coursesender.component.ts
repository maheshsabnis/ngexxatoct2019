import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/app.course.entity';
import { UniversityCourses } from '../../models/app.constants';
import { CommunicationService } from '../../services/app.communication.service';
@Component({
    selector: 'app-coursesender-component',
    templateUrl: './app.coursesender.view.html'
})
export class CourseSenderComponent implements OnInit {
    course: Course;
    courses = UniversityCourses;
    tableColumns: Array<string>;
    message: string;
    // inject the communication service

    constructor(private serv: CommunicationService) {
        this.course = new Course(0, '', '', '', 0);
        this.tableColumns = new Array<string>();
    }

    ngOnInit(): void {
        for (let c in this.course) {
            this.tableColumns.push(c);
        }
    }

    getSelectedCourse(c: Course) : void {
        this.course = c;
        // invoke a method from service and pass the CourseId to it
        this.serv.onNotifyValue(this.course.CourseId);
    }


}
