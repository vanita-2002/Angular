import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
standards=["V","VI","VII","VIII","IX","X"]
student={
  firstName:"NAME",
  lastName:"",
  standard:""
}

  ngOnInit(): void {
  }
  onSubmit(studentForm:any):void{
    console.log("hi,submitted",studentForm.value)
  }
  resetForm(studentForm:any):void{
    studentForm.reset();
    console.log("value resetted",studentForm.value)
    // studentForm.form.value is same as studentForm.value

  }

}
// standards[VIII,IX,X]
// students{
//   firstName="name",
//   lastName="",
//   standard=""
// }
