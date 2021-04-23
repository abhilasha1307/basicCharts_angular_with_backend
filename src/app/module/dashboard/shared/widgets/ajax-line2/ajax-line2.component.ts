import { AjaxLine2Service } from './ajax-line2.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ajax-line2',
  templateUrl: './ajax-line2.component.html',
  styleUrls: ['./ajax-line2.component.css']
})
export class AjaxLine2Component implements OnInit {

  chart= {};
  Object = {};

  constructor(private service : AjaxLine2Service) { }

  ngOnInit(): void {
    this.service.getAll_3().subscribe(data => {
      this.Object = data;
      this.$formChart(this.Object);
    }
    )
  }

  $formChart(object: any){
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
		seriesNew = JSON.parse(seriesNew);

    this.chart = new Highcharts.Chart({
    chart: {
      plotBackgroundColor: '#eff8ff',
      borderColor: '#03506f',
      borderWidth: 3,
      renderTo: 'container3'
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
        },
        max: 100
    },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        borderWidth: 0
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
