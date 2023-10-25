import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, repeat } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseurl="https://gsmoffers.000webhostapp.com/aakash/products/";
  // https://gsmoffers.000webhostapp.com/aakash/products/searchFilter.php

    constructor(private http: HttpClient) {  }
  
       async GetProducts(){
            return await this.http.get<any[]>(this.baseurl+`getAllOffer.php`)
      }
      async getElectronicProducts(){
        return await this.http.get<any[]>(this.baseurl+`getElectronic.php`)
  }
       GetMobilesProducts(){
        return  this.http.get<any[]>(this.baseurl+`getAllMobiles.php`)
  }
    searchMobiles (emp:any):Observable<any>{
    return  this.http.post<any>(this.baseurl+`searchFilter.php`,emp).pipe(
      repeat({ delay: 30_000 }),
    )
  }



         UpdateReceiver(receiver:any):Observable<any>{
         
          return this.http.put<any>(this.baseurl,receiver)
         }
                  DeleteReceiver(id:number):Observable<any>{ 
                    return this.http.delete<any>(this.baseurl+'/'+id)
                  }
                  downloadCSV(downloadFile:any): Observable<any> {
                    return this.http.get<any>(this.baseurl+downloadFile)
                }
               
}
