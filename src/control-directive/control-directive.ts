import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-control-directive',
  imports: [
    FormsModule
  ],
  templateUrl: './control-directive.html',
  styleUrl: './control-directive.css',
})
export class ControlDirective {

  rollno:number=0;
  name:string="";
  maths:number=0;
  science:number=0;
  ispass:boolean = true;
  issave:boolean = false;

  students =[{"rollno":12,"name":"Amit","maths":34,"science":34},{"rollno":2,"name":"Shiraj","maths":34,"science":34}]

  save(){
    let student={}
    // @ts-ignore
    student["rollno"]=this.rollno;
    // @ts-ignore
    student["name"]=this.name;
    // @ts-ignore
    student["maths"]=this.maths;
    // @ts-ignore
    student["science"]=this.science;

    // @ts-ignore
    this.students.push(student)



  }


  protected checkmarks() {
     if(this.maths<0 || this.maths>100){
       this.issave=true;
     }
     else {
       this.issave=false;
     }
  }
}
