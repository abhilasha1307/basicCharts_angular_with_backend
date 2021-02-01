import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public selectedVal!: string;
  constructor() { }

  ngOnInit(): void {
    this.selectedVal = 'option1';
  }

  public onValChange(val: string) {
  this.selectedVal = val;
}

}
