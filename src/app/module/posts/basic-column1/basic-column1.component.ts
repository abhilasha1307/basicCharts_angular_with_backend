import { basicCol1Service } from './basic-column1.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-basic-column1',
  templateUrl: './basic-column1.component.html',
  styleUrls: ['./basic-column1.component.css']
})
export class BasicColumn1Component implements OnInit {

  chart = {};
  Object = {};

  constructor(private service : basicCol1Service) { }

  ngOnInit(): void {
    this.service.getAll_1().subscribe(data => {
      this.Object = data;
      this.$formChart(this.Object);
    })
}

  $formChart(object:any)
  {

    let order= [];
    for(let i = 0; i<object.length;i++)
    {
      order[i] = Object.entries(object[i]).sort();
    }

    let Cname = [];
    let Array = [];

    for(let i = 0; i<order.length; i++)
    {
      Cname[i] = order[i][0][1];
    }

    for(let i = 0; i<order.length; i++)
    {
      Array[i] = order[i][2][1];
    }

    let length = Cname.length;
    let series = ""
    for (let q = 0; q < length; q++) {
				series += '{ "name": "' + Cname[q] + '",';
				series += ' "data": [' + Array[q] + ']'+ ' },';
			}

    let seriesNew: any;

    seriesNew = '[' + series.substr(0, series.length - 1) + ']';
    //console.log(seriesNew);
		seriesNew = JSON.parse(seriesNew);
		//console.log(seriesNew);


    this.chart = new Highcharts.Chart({
      chart: {
        type: 'column',
        borderColor: '#03506f',
        borderWidth: 3,
        plotBackgroundColor: '#eff8ff',
        renderTo: 'container5',
        width: 600
      },

      credits: {
        enabled: false
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
