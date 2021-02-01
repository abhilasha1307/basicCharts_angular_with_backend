import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicColumn1Component } from './basic-column1/basic-column1.component';
import { BasicColumn2Component } from './basic-column2/basic-column2.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    BasicColumn1Component,
    BasicColumn2Component,
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    MatDividerModule
  ],
  exports: [
    BasicColumn1Component,
    BasicColumn2Component,
  ]
})
export class SharingColumnModule { }
