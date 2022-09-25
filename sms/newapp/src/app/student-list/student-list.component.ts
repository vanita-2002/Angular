import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';
import { student } from '../shared/interfaces/student.interface';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  // may or may not will have ? instead of !
  students !:student[]
  selectedStudent!:student;
  constructor(private loggerService: LoggerService, private studentService: StudentService) {}
  ngOnInit(): void {
    this.getStudentDetails();
  }

  viewDetails(student: student){
    this.selectedStudent = student;
    // this.loggerService.log(student);
    this.studentService.log(student);
  }

  getStudentDetails():void{
    // this.students =this.loggerService.fetchStudents();
    this.students = this.studentService.fetchStudents();
  }

}




