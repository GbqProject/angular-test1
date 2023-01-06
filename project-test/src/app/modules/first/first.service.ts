import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { test1 } from './first.types';
import { enviroment } from 'src/enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  private test1_arr: test1[] = [];
  private _test1: BehaviorSubject<test1[]> = new BehaviorSubject(this.test1_arr);
  constructor(private _httpClient: HttpClient) {

  }

  get test1$(): Observable<test1[]> {
    return this._test1.asObservable();
  }

  listTest1(): Observable<test1[]> {
    return this._httpClient.get<test1[]>(`${enviroment.url_backend}/Test1/findAll`).pipe(tap(res => {
      this._test1.next(res);
    }));
  }

  listTest1V2(): Observable<test1[]> {
    return this._httpClient.get<test1[]>(`${enviroment.url_backend}/Test1/findAll`);
  }

}
