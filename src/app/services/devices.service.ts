import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { devicesResults } from '../models/devicesResults';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  devicesApiURL:string = environment.devicesApiURL;

  constructor(private http:HttpClient) { }

  getData(): Observable<devicesResults[]>{
    return this.http.get<devicesResults[]>(this.devicesApiURL)
    .pipe(
      map((response)=> {
        return response;
      })
    )
  }

  getDataByID(id:number): Observable<devicesResults>{
    return this.http.get<devicesResults>(this.devicesApiURL + id +"/")
    .pipe(
      map((response)=> {
        return response;
      })
    )
  }
}
