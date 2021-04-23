import { basicCol2Service } from './basic-column2.service';
import * as Highcharts from 'highcharts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-column2',
  templateUrl: './basic-column2.component.html',
  styleUrls: ['./basic-column2.component.css']
})
export class BasicColumn2Component implements OnInit {
  chart = {};
  Object = {};

  constructor(private service : basicCol2Service) { }

  ngOnInit(): void {
    this.service.getAll_2().subscribe(data => {
      this.Object = data;
      this.$formChart(this.Object);
    })
  }

  $formChart(object: any)
  {

    let order= [];
    for(var i = 0; i<object.length;i++)
    {
      order[i] = Object.entries(object[i]).sort();
    }

    var Cname = [];
    var Array = [];

    for(var i = 0; i<order.length; i++)
    {
      Cname[i] = order[i][0][1];
    }

    for(var i = 0; i<order.length; i++)
    {
      Array[i] = order[i][2][1];
    }

    var length = Cname.length;
    var series = ""
    for (var q = 0; q < length; q++) {
				series += '{ "name": "' + Cname[q] + '",';
				series += ' "data": [' + Array[q] + ']'+ ' },';
			}

    var seriesNew: any;

    seriesNew = '[' + series.substr(0, series.length - 1) + ']';
    //console.log(seriesNew);
		seriesNew = JSON.parse(seriesNew);
		//console.log(seriesNew);

    this.chart = new Highcharts.Chart({
      chart: {
        type : 'column',
        borderColor: '#03506f',
        borderWidth: 3,
        width:600,
        plotBackgroundColor: '#eff8ff',
        renderTo: 'container6'
      },

      credits: {
        enabled: false
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
    series: seriesNew,

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
    })
  }
}
