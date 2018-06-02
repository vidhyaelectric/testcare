import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements OnInit {

  gaugeType = "semi";
  gaugeValue = 6.8;
  gaugeLabel = "DAYS";
 // gaugeAppendText = "km/hr";
 thresholdConfig = {
  6.8: {color: '#3cb371'}
};
  gaugethick = 10;
  constructor() { }

  ngOnInit() {
  }

}
