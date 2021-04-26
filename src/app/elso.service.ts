import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyAdat } from './adat.model';

@Injectable({
    providedIn: 'root'
})

export class ElsoService{
    
    public adatom: MyAdat[] = [];
    public player: MyAdat[] = [];

    constructor(
        private http: HttpClient
    ){}

    /*httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }*/

public fetch(): Observable<any> {
    return this.http.get('https://www.balldontlie.io/api/v1/players?search=lebron');//, this.httpOptions);
    }
}