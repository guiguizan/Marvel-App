import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, observable, Observable } from 'rxjs';
import { ResourceService } from './resource.service';
import axios, { Axios } from 'axios';
import {Md5} from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService extends ResourceService{

  constructor( private http : HttpClient) {
    super(http);
  }

  marvelURL: string = 'https://gateway.marvel.com/';
  publicKey = '5a237863b3cc2061003cbbc4fe20dc06';
  privateKey = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';
  timestamp: any;
  hash: any;

 
  getPersonagens(consulta: String): Observable<any> {
    console.log(consulta)
    this.timestamp = Number(new Date());
    const md5 = new Md5();
    this.hash = md5.appendStr(this.timestamp + this.privateKey + this.publicKey).end();
    if(consulta == ''){
      this.marvelURL = 'https://gateway.marvel.com/v1/public/characters?ts=' + this.timestamp + '&apikey=' + this.publicKey + '&hash=' + this.hash;
    }else{
      this.marvelURL = 'https://gateway.marvel.com/v1/public/characters?ts=' + this.timestamp + '&apikey=' + this.publicKey + '&hash=' + this.hash + '&name=' + consulta;
    }
    return this.http.get(this.marvelURL)
      .pipe(
        map((response) => {
          console.log(response);
          return response;
        }),
        catchError((err, caught) => {
          console.error(err);
          throw err;
        }
        )
      )
  }

}
