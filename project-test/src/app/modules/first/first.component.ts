import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { FirstService } from './first.service';
import { test1 } from './first.types';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre'];
  dataSource: test1[] = [];
  dataSourceOb: Observable<test1[]> = new Observable();

  constructor(private firsService: FirstService){

  }

  ngOnInit(){
    //this.getListTest1();
    this.getListTest1V2()
  }

  getListTest1(): void {
    this.dataSourceOb = this.firsService.test1$;
    this.firsService.listTest1().subscribe();
  }

  getListTest1V2():void {
    this.firsService.listTest1V2().subscribe(res=>{
      console.log(res);
    });
  }
}
