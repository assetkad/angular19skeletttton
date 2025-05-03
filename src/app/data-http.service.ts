import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://api.example.com/data';

@Injectable({
  providedIn: 'root',
})
export class DataHttpService {
  http = inject(HttpClient);

  getData(): Observable<unknown> {
    return this.http.get<unknown>(API_URL);
  }

  postData(payload: unknown): Observable<unknown> {
    return this.http.post<unknown>(API_URL, payload);
  }
}
