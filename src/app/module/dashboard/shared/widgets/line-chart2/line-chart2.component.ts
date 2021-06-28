import { Linechart2Service } from './line-chart2.service';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { map } from 'rxjs/operators';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart2',
  templateUrl: './line-chart2.component.html',
  styleUrls: ['./line-chart2.component.css']
})
export class LineChart2Component implements OnInit {
  newChart: Object
  Object: any

  constructor(private resp: Linechart2Service) { }

  ngOnInit(): void {
    this.resp.getAll_1().subscribe(data => {
      this.Object = data
      this.$function(this.Object)
    });
    }

    $function(object: any)
    {
      let series : String ="";
      let order = Object.entries(object[0]).sort();
      let name = order[0][1];
      let array = order[2][1];
      let seriesNew: any;


        series += '{ "name": "' + name + '",';
				series += ' "data": [' + array + ']'+' },';


      seriesNew = '[' + series.substr(0, series.length - 1) + ']';
	    seriesNew = JSON.parse(seriesNew);

      this.newChart = new Highcharts.Chart({
        chart: {
          plotBackgroundColor: '#eff8ff',
          borderColor: '#03506f',
          borderWidth: 3,
          width: 600,
          renderTo: 'container1',
        },

        credits: {
          enabled: false
        },

        tooltip: {
          pointFormat: '{series.name}: <b>{point.y:.2f}%</b>'
        },

        plotOptions: {
          line: {
            marker: {
              enabled: false
            },
          },
          series: {
            lineWidth: 3
        }
        },

        title: {
          text: 'Outcome of Cases (Recovery) in India'
        },

        subtitle: {
          text: 'Source: worldometers.info'
        },

        xAxis: {
          title: {
            text: 'Months'
          },
          categories: ['Feb 2020', 'Mar 2020', 'Apr 2020', 'May 2020', 'Jun 2020', 'Jul 2020', 'Aug 2020', 'Sep 2020', 'Oct 2020', 'Nov 2020', 'Dec 2020']
        },

        yAxis: {
          title: {
            text: 'Percent(%)'
          },
          labels: {
            format: '{value}%'
          },
          max: 100,
          min: 0
        },

        legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical',
          borderWidth: 0
        },

        series : seriesNew,

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
      });
    }
  }
