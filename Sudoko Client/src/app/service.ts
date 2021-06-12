import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class Service  {
    constructor(public _http: HttpClient) {}
    header() {
        return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
      }
      send(puzzle_array: any): Observable<any> {
        return this._http.post('http://localhost:3000/puzzle_array', {puzzle_array}, { headers: this.header() });
      }
}
