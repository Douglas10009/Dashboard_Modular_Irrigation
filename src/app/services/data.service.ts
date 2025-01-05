import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { dataResults } from '../models/dataResult';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataApiURL:string = environment.dataApiURL;

  constructor(private http:HttpClient) { }

  getData(): Observable<dataResults[]>{
    return this.http.get<dataResults[]>(this.dataApiURL)
    .pipe(
      map((response)=> {
        return response;
      })
    )
  }

  getDataByID(id:number): Observable<dataResults>{
    return this.http.get<dataResults>(this.dataApiURL + id +"/")
    .pipe(
      map((response)=> {
        return response;
      })
    )
  }
}
