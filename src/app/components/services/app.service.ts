import { environment } from '../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AppApiService {
  readonly base_url = environment.API_URL + 'api/';
  readonly location_fetch = 'https://ipinfo.io/';
  readonly Exchange_data = 'https://api.coingecko.com/api/v3/exchange_rates';
  readonly Find_Exchange = 'https://api.exchangerate.host/latest';
  constructor(private http: HttpClient){}
  getlocationAPI(IPaddress:any){
    return this.http.get<any>(`${this.location_fetch}${IPaddress}?token=${environment.IP_token}`).toPromise();
  }
  fetchexchangedataAPI(){
    return this.http.get<any>(`${this.Exchange_data}`).toPromise();
  }
  getexchangeAPI(From,To){
    return this.http.get<any>(`${this.Find_Exchange}?base=${From}&symbols=${To}&places=2`).toPromise();
  }
}