import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  msg:string  = "this is a property binding content for h1 tag";
  style= "color:red;text-align:center;"

  f1:boolean = false;
  f2:boolean = false;

}
