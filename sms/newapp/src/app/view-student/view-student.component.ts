import { Component, Input, OnInit } from '@angular/core';
import { student } from '../shared/interfaces/student.interface';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
@Input() ss!: student
  constructor() { }

  ngOnInit(): void {
  }

}
