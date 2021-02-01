import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ajax-line1',
  templateUrl: './ajax-line1.component.html',
  styleUrls: ['./ajax-line1.component.css']
})
export class AjaxLine1Component implements OnInit {
  chartOptions!: {};
  @Input() data: any = [];
  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
    chart: {
      plotBackgroundColor: '#eff8ff',
      borderColor: '#03506f',
      borderWidth: 3
    },

    credits: {
        enabled: false
    },

    title: {
        text: 'Recovery Rate (COVID-19) in India v/s China'
    },

    subtitle: {
        text: 'Source: worldometers.info'
    },

    xAxis: {
      title : {
            text: 'Months'
        },
          categories: ['Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020', 'Dec 2020', 'Jan 2021']

    },

  yAxis: {
        title: {
            text: 'Recovery Rate'
        },
        labels: {
            format: '{value}%'
        }
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        borderWidth: 0
    },

    series: [{
        name: 'China',
        data: [56.82, 93.58, 95.84, 94.33, 94.41, 94.42, 94.47, 94.55, 94.57, 94.60, 94.65, 94.71],
        color: '#54e346'
    }, {
        name: 'India',
        data: [100, 77.87, 88.71, 94.44, 95.13, 96.73, 97.75, 97.79, 98.17, 98.41, 98.51, 98.54],
        color: '#eb5e0b'
    }],
  };
}}
