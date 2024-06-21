import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanphamService {
  post(arg0: string, sanpham: SanphamService) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  //các phương thức khác 
  getListSP(): Observable<any> {
    return this.http.get<any>('https://localhost:7227/api/SanPham')
  }

  addSP(newSP: any): Observable<any> {
    const url = 'https://localhost:7227/api/SanPham';
    return this.http.post<any>(url, newSP);
  }
  getSPById(id: string): Observable<any> {
    const url = `https://localhost:7227/api/SanPham/${id}`;
    return this.http.get<any>(url);
  }

  deleteSP(id: string): Observable<any> {
    const url = `https://localhost:7227/api/SanPham/${id}`;
    return this.http.delete<any>(url);
  }

  updateSP(id: string, updatedData: any): Observable<any> {
    const url = `https://localhost:7227/api/SanPham/`+ id;
    console.log('id được cập nhật là: ', updatedData)
    return this.http.put<any>(url, updatedData).pipe(
      
      catchError((error) => {
        console.error('Cập nhật không thành công:', error);
        throw error;
      })
    );
  }
}
