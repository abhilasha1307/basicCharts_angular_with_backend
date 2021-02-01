import * as Highcharts from 'highcharts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-column2',
  templateUrl: './basic-column2.component.html',
  styleUrls: ['./basic-column2.component.css']
})
export class BasicColumn2Component implements OnInit {
  chart!: {};
  highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    this.chart = {
      chart: {
        type : 'column',
        borderColor: '#03506f',
        borderWidth: 3,
        plotBackgroundColor: '#eff8ff',
      },
      title: {
        text: 'Active COVID-19 cases in China, India, Russia and USA'
    },
    subtitle: {
        text: 'Source: worldometer.info'
    },
    xAxis: {
      title: {
        text: 'Months'
      },
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
            text: 'Active COVID-19 Cases'
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
        data: [554, 52093, 5120, 1003, 82, 349, 233, 422, 168, 245, 316, 324, 1711]

    }, {
        name: 'India',
        data: [null, 0, 455, 16319, 80072, 183058, 439892, 732677, 961993, 669602, 456410, 305015, 190244]

    }, {
        name: 'Russia',
        data: [null, 0, 1761, 88141, 224551, 225325, 191042, 165025, 193268, 365740, 464801, 549706, 479419]

    }, {
        name: 'USA',
        data: [null, 29, 57082, 737704, 1122958, 1193976, 2063209, 2594458, 2615742, 2805622, 4935011, 7432709, 9746402]

    }]
    };
  }

}
