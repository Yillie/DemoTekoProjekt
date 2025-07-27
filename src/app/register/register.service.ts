// filepath: e:\TEKO\Semester 6\WebFrontend\DemoTekoProjekt\src\app\register\register-backend.service.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  displayName: string;
}

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl =
    'https://kek-c8c6evhbfpgseka5.westeurope-01.azurewebsites.net/api/Auth/register';

  constructor(private http: HttpClient) {}

  register(data: RegisterData): Observable<any> {
    data.displayName = `${data.firstName}_${data.lastName}`;
    return this.http.post<any>(this.apiUrl, data);
  }
}
