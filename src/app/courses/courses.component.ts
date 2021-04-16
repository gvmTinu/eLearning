import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  constructor() { }

  courses = [
    { "id": 1, "name": "Learn Angular", "description": "Start this course to become a full-time Angular developer!", "image": "../../assets/ng.png"},
    { "id": 2, "name": "Learn TypeScript", "description": "Start this course to become a full-time TypeScript developer!", "image": "../../assets/ts.png"},
    { "id": 3, "name": "Learn Node.js", "description": "Start this course to become a full-time Node.js developer!", "image": "../../assets/node.jpg"},
    { "id": 4, "name": "Learn JavaScript", "description": "Start this course to become a full-time JavaScript developer!", "image": "../../assets/js.png"},
  ]

}
