import { Component, OnInit, ViewChild } from '@angular/core';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  title = 'DemoPJ';

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {  
    //this.paginator;
  }

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.isSideNavCollapsed = data.collapsed
    this.screenWidth = data.screenWidth 
  }
}
