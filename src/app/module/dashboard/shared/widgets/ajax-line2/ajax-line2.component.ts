import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ajax-line2',
  templateUrl: './ajax-line2.component.html',
  styleUrls: ['./ajax-line2.component.css']
})
export class AjaxLine2Component implements OnInit {

  chart!: {};
  highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
  this.chart = {
    chart: {
      plotBackgroundColor: '#eff8ff',
      borderColor: '#03506f',
      borderWidth: 3
    },

    credits: {
        enabled: false
    },

    title: {
        text: 'Recovery Rate (COVID-19) in India v/s USA'
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
        name: 'USA',
        data: [100, 50, 59.59, 78.15, 88.12, 93.33, 94.08, 95.18, 95.61, 96.43, 96.84, 97.31],
        color: '#111d5e'
    }, {
        name: 'India',
        data: [100, 77.87, 88.71, 94.44, 95.13, 96.73, 97.75, 97.79, 98.17, 98.41, 98.51, 98.54],
        color: '#eb5e0b'
    }],
  };
  }

}
