import { Course } from './app.course.entity';
import { StudentChild } from './app.student.entity';
export const UniversityCourses: Array<Course> = new Array<Course>();


export const Courses = [
  'Pathology',
  'Nursing',
  'Physio',
  'Ortho'
];
export const CourseYear = [
  'First',
  'Second',
  'Third',
  'Final'
];
export const Universities = [
  'ABC', 'PQR', 'CDE', 'CDA'
];




UniversityCourses.push(new Course(1001, 'HC-Path', 'Pathology',
  'Pathology Course for Lab Tests', 100));
UniversityCourses.push(new Course(1002, 'HC-Radio', 'Radiology',
  'Radiology Course for Lab Tests', 130));
UniversityCourses.push(new Course(1003, 'HC-Phy', 'Physio',
  'Physio Course for Doctors', 500));
UniversityCourses.push(new Course(1004, 'HC-Medicine', 'Medicine',
  'General Medicine Course for Doctors', 50));

export const Students: Array<StudentChild> = new Array<StudentChild>();

Students.push(new StudentChild(101, 'Std-101', 'Ajay', 'Bavdhan', 'Pune', 'MH', 1001));
Students.push(new StudentChild(102, 'Std-102', 'Bjay', 'Aavdhan', 'Pune', 'MH', 1002));
Students.push(new StudentChild(103, 'Std-103', 'Cjay', 'Cavdhan', 'Pune', 'MH', 1003));
Students.push(new StudentChild(104, 'Std-104', 'Djay', 'Davdhan', 'Pune', 'MH', 1004));
Students.push(new StudentChild(105, 'Std-105', 'Ejay', 'Eavdhan', 'Pune', 'MH', 1001));
Students.push(new StudentChild(106, 'Std-106', 'Fjay', 'Favdhan', 'Pune', 'MH', 1002));
Students.push(new StudentChild(107, 'Std-107', 'Gjay', 'Gavdhan', 'Pune', 'MH', 1003));
Students.push(new StudentChild(108, 'Std-108', 'Hjay', 'Havdhan', 'Pune', 'MH', 1004));
