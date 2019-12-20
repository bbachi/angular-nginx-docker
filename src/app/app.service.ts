import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  configUrl = 'envapp/assets/app.config.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
