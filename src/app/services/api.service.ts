import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000';  // URL API local

  constructor(private http: HttpClient) {}

  // Métodos para manejar Información Personal
  getAllPersonalData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allPersonalData`);
  }

  createPersonalData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createPersonalData`, data);
  }

  getPersonalDataById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/findPersonalData/${id}`);
  }

  updatePersonalData(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updatePersonalData/${id}`, data);
  }

  deletePersonalData(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deletePersonalData/${id}`);
  }

  // Métodos para manejar Experiencia Laboral
  getAllXpData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allXpData`);
  }

  createXpData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createXpData`, data);
  }

  getXpDataById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/findXpData/${id}`);
  }

  updateXpData(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateXpData/${id}`, data);
  }

  deleteXpData(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/deleteXpData/${id}`);
  }

  // Métodos para manejar Datos Académicos
  getAllSchoolarData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allSchoolarData`);
  }

  createSchoolarData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createSchoolarData`, data);
  }

  getSchoolarDataById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/findSchoolarData/${id}`);
  }

  updateSchoolarData(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/updateSchoolarData/${id}`, data);
  }

  deleteSchoolarData(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/schoolarData/${id}`);
  }
}
