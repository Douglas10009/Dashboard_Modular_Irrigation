import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { dataResult } from '../models/dataResult';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiURL:string = environment.apiURL;

  constructor(private http:HttpClient) { }

  getDataByID(id:number){
    return this.http.get<dataResult>(this.apiURL + id +"/")
    .pipe(
      map((response)=> {
        return response;
      })
    )
  }
}
