import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { LineChartComponent } from './widgets/line-chart/line-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AjaxLine1Component } from './widgets/ajax-line1/ajax-line1.component';
import { AjaxLine2Component } from './widgets/ajax-line2/ajax-line2.component';
import { LineChart2Component } from './widgets/line-chart2/line-chart2.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LineChartComponent,
    AjaxLine1Component,
    AjaxLine2Component,
    LineChart2Component],

  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatButtonToggleModule,
    RouterModule,
    HighchartsChartModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LineChartComponent,
    AjaxLine1Component,
    AjaxLine2Component,
    LineChart2Component,
  ]
})
export class SharedModule { }
