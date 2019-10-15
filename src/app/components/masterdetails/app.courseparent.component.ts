import { Component, OnInit } from '@angular/core';
import { Course } from './../../models/app.course.entity';
import { UniversityCourses } from './../../models/app.constants';
@Component({
    selector: 'app-courseparent-component',
    templateUrl: './app.courseparent.view.html'
})
export class CourseParentComponent implements OnInit {
    course: Course;
    courses = UniversityCourses;
    tableColumns: Array<string>;
    message: string;
    constructor() {
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
    }

    onReciveNotification($event): void {
      this.message = $event;
    }
}
