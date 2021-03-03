import { Series } from './lineChart2';
import { LineChart2Service } from './line-chart2.service';
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
  series!: any;
  constructor(private resp: LineChart2Service) { }

  ngOnInit(): void {
    this.resp.getAll().subscribe(data => this.series = data);

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
        labels: {
            format: '{value}%'
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
        data: [this.series],
        lineWidth: 5,
        color: '#11698e'
    }],
  };
    }
  }
