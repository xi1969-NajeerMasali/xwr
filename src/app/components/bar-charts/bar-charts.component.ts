import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.css']
})
export class BarChartsComponent implements OnInit {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednseday', 'Thursday', 'Friday', 'Saturday'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [100,200, 400, 600, 800, 1000, 1200], label: 'Employee Count' }
  ];

  // barChartColors: Color[] = [
  //   {
  //     borderColor: 'blue',
  //     backgroundColor: '#2c3bc',
  //   },
  // ];
  constructor() { }

  ngOnInit(): void {
  }

}
