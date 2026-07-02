import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChildComponent1} from '../child-component1/child-component1';
import {ChildComponent2} from '../child-component2/child-component2';
import {PropertyBinding} from '../property-binding/property-binding';
import {EventBinding} from '../event-binding/event-binding';
import {TwowayBinding} from '../twoway-binding/twoway-binding';
import {ControlDirective} from '../control-directive/control-directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  ControlDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
  protected readonly title = signal('AngularProjectDemo');
  name:string="Amit";
  maths:number=34;
  science:number=54;

}
