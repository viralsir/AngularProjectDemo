import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  msg:string="";
  total :number=0;

  showMessage(username:HTMLInputElement)
  {
     this.msg="Welcome "+username.value;
     username.value="";
  }

  sum(no1:HTMLInputElement, no2:HTMLInputElement)
  {
     this.total = parseInt(no1.value)+ parseInt(no2.value);

  }


}
