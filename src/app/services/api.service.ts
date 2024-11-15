import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items/`); // Ruta para obtener la lista
  }

  // Puedes agregar más métodos según necesites
}
