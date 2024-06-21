import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChinhanhService {
  post(arg0: string, user: ChinhanhService) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }

  //các phương thức khác 
  getListCN(): Observable<any> {
    return this.http.get<any>('https://localhost:7227/api/ChiNhanh')
  }

  addCN(newCN: any): Observable<any> {
    const url = 'https://localhost:7227/api/ChiNhanh';
    return this.http.post<any>(url, newCN);
  }
  getCNById(id: string): Observable<any> {
    const url = `https://localhost:7227/api/ChiNhanh/${id}`;
    return this.http.get<any>(url);
  }

  deleteCN(id: string): Observable<any> {
    const url = `https://localhost:7227/api/ChiNhanh/${id}`;
    return this.http.delete<any>(url);
  }

  updateCN(id: string, updatedData: any): Observable<any> {
    const url = `https://localhost:7227/api/ChiNhanh/` + id;
    console.log('id được cập nhật là: ', updatedData)
    return this.http.put<any>(url, updatedData).pipe(

      catchError((error) => {
        console.error('Cập nhật không thành công:', error);
        throw error;
      })
    );
  }
}
