import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlacasServiceService {


  constructor(
    private http: HttpClient
    // private params: HttpParams
    ) { }

  getAll<Any>(scope: string, page: number, size: number, params?: HttpParams) {

    return this.http.get(environment.API_URL+ `/${scope}/page/${page}/size/${size}`, {params});
  }

}
