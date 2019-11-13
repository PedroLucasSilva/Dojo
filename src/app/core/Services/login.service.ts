import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public async getLogin(): Promise<any> {
    const uri = '';
    return this.httpClient.get<any>(uri).toPromise();
  }
}
