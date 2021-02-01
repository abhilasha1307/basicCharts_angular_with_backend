import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-basic-column1',
  templateUrl: './basic-column1.component.html',
  styleUrls: ['./basic-column1.component.css']
})
export class BasicColumn1Component implements OnInit {

  chart!: {};
  highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chart = {
      chart: {
        type: 'column',
        borderColor: '#03506f',
        borderWidth: 3,
        plotBackgroundColor: '#eff8ff',
      },

      title: {
        text: 'Total COVID-19 cases in China, India, Russia and USA'
    },
    subtitle: {
        text: 'Source: worldometer.info'
    },
    xAxis: {
        categories: [
            'Jan 2020',
            'Feb 2020',
            'Mar 2020',
            'Apr 2020',
            'May 2020',
            'Jun 2020',
            'Jul 2020',
            'Aug 2020',
            'Sep 2020',
            'Oct 2020',
            'Nov 2020',
            'Dec 2020',
            'Jan 2021'
        ],
        crosshair: true
    },

    yAxis: {
        title: {
            text: 'Total COVID-19 Cases'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'China',
        data: [830, 58761, 80844, 82735, 82929, 83040, 83602, 84737, 85291, 85704, 86398, 86955, 89378]

    }, {
        name: 'India',
        data: [null, 3, 332, 33062, 190609, 529577, 1532135, 3619169, 6310267, 8182881, 9309871, 10188392, 10720971]

    }, {
        name: 'Russia',
        data: [null, 2, 2337, 106498, 405843, 647849, 834499, 985346, 1176286, 1618116, 2295654, 3131550, 3774672]

    }, {
        name: 'USA',
        data: [null, 15, 173368, 1086624, 1856560, 2762810, 4782831, 6270103, 7446364, 9483892, 13998001, 20024015, 26512193]

    }]

  };
}}
