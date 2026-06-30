import { Component } from '@angular/core';
import {ChildComponent2} from '../child-component2/child-component2';

@Component({
  selector: 'app-child-component1',
  imports: [
    ChildComponent2
  ],
  templateUrl: './child-component1.html',
  styleUrl: './child-component1.css',
})
export class ChildComponent1 {}
