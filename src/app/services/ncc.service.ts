import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NccService {

  post(arg0: string, ncc: NccService) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  //các phương thức khác 
  getListNCC(): Observable<any> {
    return this.http.get<any>('https://localhost:7227/api/NhaCungCap')
  }

  addNCC(newNcc: any): Observable<any> {
    const url = 'https://localhost:7227/api/NhaCungCap';
    return this.http.post<any>(url, newNcc);
  }
  getNCCById(id: string): Observable<any> {
    const url = `https://localhost:7227/api/NhaCungCap/${id}`;
    return this.http.get<any>(url);
  }

  deleteNCC(id: string): Observable<any> {
    const url = `https://localhost:7227/api/NhaCungCap/${id}`;
    return this.http.delete<any>(url);
  }

  updateNCC(id: string, updatedData: any): Observable<any> {
    const url = `https://localhost:7227/api/NhaCungCap/` + id;
    console.log('id được cập nhật là: ', updatedData)
    return this.http.put<any>(url, updatedData).pipe(

      catchError((error) => {
        console.error('Cập nhật không thành công:', error);
        throw error;
      })
    );
  }
}