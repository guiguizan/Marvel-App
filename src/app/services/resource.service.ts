import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EncoderHelper } from './helper';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private httpClient: HttpClient) { }

  postResource<T>(resourcePath: string, obj: T): Observable<any> {
    let json: any = obj;
    console.log(`${resourcePath}`);
    return this.httpClient.post<T>(
        `${resourcePath}`, 
        new HttpParams({ encoder: new EncoderHelper(), fromObject: json }))
        .pipe(map(data => data as T));
}

}
