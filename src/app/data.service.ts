import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  getResponse() {
    return this.httpClient.get('https://api.chucknorris.io/jokes/random')
  }
}
