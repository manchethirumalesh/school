import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

 APIUrl = "https://student-management-api-1u3cd4j7s.now.sh/";


  constructor(private http : HttpClient) { }


  getstudentlist():Observable<any[]>{

    return this.http.get<any[]>(this.APIUrl + 'students/')
 }

}
