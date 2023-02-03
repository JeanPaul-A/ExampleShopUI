import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface Client {
  clientID: number;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) {
  }

  getAllClients(page = 1): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.url}/api/clients`);
  };
}
