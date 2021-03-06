import { Injectable } from '@angular/core';
import { Fact } from './fact';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FactsFetcherService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:6969";

  getRandomFact(): Observable<Fact | undefined> {
    return this.http.get<Fact>(this.url + '/random')
  }

  postfact(content: string): Observable<number | undefined> {
    return this.http.post<any>(this.url, { "content": content })

  }
}
