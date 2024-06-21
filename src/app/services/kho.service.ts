import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KhoService {

post(arg0: string, user: KhoService) {
  throw new Error('Method not implemented.');
}
constructor(private http: HttpClient) { }

//các phương thức khác 
getListKho(): Observable<any> {
  return this.http.get<any>('https://localhost:7227/api/Kho')
}

addKho(newKho: any): Observable<any> {
  const url = 'https://localhost:7227/api/Kho';
  return this.http.post<any>(url, newKho);
}
getKhoById(id: string): Observable<any> {
  const url = `https://localhost:7227/api/Kho/${id}`;
  return this.http.get<any>(url);
}

deleteKho(id: string): Observable<any> {
  const url = `https://localhost:7227/api/Kho/${id}`;
  return this.http.delete<any>(url);
}

updateKho(id: string, updatedData: any): Observable<any> {
  const url = `https://localhost:7227/api/Kho/` + id;
  console.log('id được cập nhật là: ', updatedData)
  return this.http.put<any>(url, updatedData).pipe(

    catchError((error) => {
      console.error('Cập nhật không thành công:', error);
      throw error;
    })
  );
}
}
