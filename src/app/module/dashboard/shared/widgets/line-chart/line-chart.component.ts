import { LinechartService } from './line-chart.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  chartOptions = {};
  Object = {};

  constructor(private service: LinechartService) { }

  ngOnInit(): void {
    this.service.getAll_4().subscribe(data=> {
    this.Object = data;
    this.$formChart(this.Object)});
    }

    $formChart(object: any)
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


    this.chartOptions = new Highcharts.Chart({
      chart: {
        borderColor: '#03506f',
        borderWidth: 3,
        plotBackgroundColor: '#eff8ff',
        width: 600,
        height: 450,
        renderTo: 'container2'
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
            lineWidth: 3
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
