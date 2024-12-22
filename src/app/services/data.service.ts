import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { dataResults } from '../models/dataResult';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL:string = environment.apiURL;

  constructor(private http:HttpClient) { }

  getData(): Observable<dataResults[]>{
    return this.http.get<dataResults[]>(this.apiURL)
    .pipe(
      map((response)=> {
        return response;
      })
    )
  }

  getDataByID(id:number): Observable<dataResults>{
    return this.http.get<dataResults>(this.apiURL + id +"/")
    .pipe(
      map((response)=> {
        return response;
      })
    )
  }
}
