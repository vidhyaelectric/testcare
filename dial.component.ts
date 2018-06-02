import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.css']
})
export class DialComponent  {
  @Input() taskpercentage:number;
  @Input() outerstrokecolor:string;
  @Input() title:string;
}
