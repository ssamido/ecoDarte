import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Demande } from '../entities/demande';
@Injectable({
  providedIn: 'root'
})
export class ManageService {

  serverUrl = "http://localhost:8080/"
  constructor(private http : HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('assets/data.json');
  }

  sendDemande(demande: Demande): Observable<any> {
    let url = this.serverUrl + 'darte/demande/'
    return this.http.post(url , demande)
  }

  getDemande(id): Observable<any> {
    let url = this.serverUrl + 'darte/demande/'+id;
    return this.http.get(url)
  }


  getParams():Observable<any>  {

    let url = this.serverUrl + 'params/getParams'
    return this.http.get(url)
  }
}
