import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  chartOptions!: {};
  @Input() data: any = [];

  Highcharts = Highcharts;


  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {

      chart: {
        borderColor: '#03506f',
        borderWidth: 3,
        plotBackgroundColor: '#eff8ff',
        width: 700,
        height: 450
      },

      credits: {
        enabled: false
    },

    title: {
        text: 'COVID-19 Statistics across different Countries In 2020'
    },

    subtitle: {
        text: 'Source: worldometers.info'
    },

    yAxis: {
        title: {
            text: 'Number of Deaths'
        }
    },

    xAxis: {
        title : {
            text: 'Months'
        },
          categories: ['Jan 2020', 'Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020', 'Dec 2020', 'Jan 2021']

    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
        }
    },

    series: [{
        name: 'China',
        data: [17, 2870, 3312, 4633, 4634, 4634, 4634, 4634, 4634, 4634, 4634, 4634, 4636]
    }, {
        name: 'India',
        data: [null, null, 32, 1154, 5185, 17410, 36551, 65435, 98708, 122149, 137659, 148774, 153751]
    }, {
        name: 'Japan',
        data: [null, 5, 56, 430, 886, 972, 1001, 1264, 1564, 1744, 2119, 3414, 5158]
    }, {
        name: 'Russia',
        data: [null, null, 9, 1073, 4693, 9320, 13963, 17093, 20722, 27990, 39895, 56425, 70482]
    }, {
        name: 'USA',
        data: [null, null, 5210, 55367, 108439, 129353, 155931, 188113, 212082, 236415, 274294, 354391, 451407]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
  };
}}
