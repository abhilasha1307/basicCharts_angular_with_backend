import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart2',
  templateUrl: './line-chart2.component.html',
  styleUrls: ['./line-chart2.component.css']
})
export class LineChart2Component implements OnInit {
  chart!: {};
  highcharts = Highcharts;
  constructor() { }

  ngOnInit(): void {
    this.chart = {
      chart: {
      plotBackgroundColor: '#eff8ff',
      height: (9 / 16 * 100) + '%',
      borderColor: '#03506f',
      borderWidth: 3,
      width: 700
    },

    credits: {
        enabled: false
    },

    tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.2f}%</b>'
        },

    plotOptions: {
            line : {
                marker: {
                    enabled: false
                }
            }
        },

    title: {
        text: 'Outcome of Cases (Recovery or Death) in India'
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
            text: 'Percent(%)'
        },
        max: 100
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        borderWidth: 0
    },

    series: [{
        name: 'Recovery Rate',
        lineWidth: 5,
        data: [100, 86.67, 78.13, 91.66, 94.79, 96.10, 97.38, 97.96, 98.30, 98.45, 98.50, 98.53],
        color: '#11698e'
    }, {
        name: 'Death Rate',
        lineWidth: 5,
        data: [0, 13.33, 21.87, 8.34, 5.21, 3.90, 2.62, 2.04, 1.71, 1.55, 1.50, 1.47],
        color: '#ff4646'
    }],
  };
    }
  }
