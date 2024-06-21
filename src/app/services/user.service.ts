import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  
export class UserService {
  post(arg0: string, user: UserService) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

//các phương thức khác 
getListUser(): Observable<any> {
  return this.http.get<any>('http://localhost:5144/api/User/LayTatCa')
}

addUser(newUser: any): Observable<any> {
  const url = 'https://localhost:5144/api/User/ThemMoi';
  return this.http.post<any>(url, newUser);
}
getUserById(id: string): Observable<any> {
  const url = `https://localhost:5144/api/User/TimKiem/${id}`;
  return this.http.get<any>(url);
}

deleteUser(id: string): Observable<any> {
  const url = `https://localhost:5144/api/User/Xoa/${id}`;
  return this.http.delete<any>(url);
}

updateUser(id: string, updatedData: any): Observable<any> {
  const url = `https://localhost:5144/api/User/CapNhat/`+ id;
  console.log('id được cập nhật là: ', updatedData)
  return this.http.put<any>(url, updatedData).pipe(
    
    catchError((error) => {
      console.error('Cập nhật không thành công:', error);
      throw error;
    })
  );
}


  // //các phương thức khác 
  // getListUser(): Observable<any> {
  //   return this.http.get<any>('https://localhost:7227/api/User/Laytatca')
  // }

  // addUser(newUser: any): Observable<any> {
  //   const url = 'https://localhost:7227/api/User/ThemMoi';
  //   return this.http.post<any>(url, newUser);
  // }
  // getUserById(id: string): Observable<any> {
  //   const url = `https://localhost:7227/api/User/TimKiem/${id}`;
  //   return this.http.get<any>(url);
  // }

  // deleteUser(id: string): Observable<any> {
  //   const url = `https://localhost:7227/api/User/Xoa/${id}`;
  //   return this.http.delete<any>(url);
  // }

  // updateUser(id: string, updatedData: any): Observable<any> {
  //   const url = `https://localhost:7227/api/User/CapNhat/`+ id;
  //   console.log('id được cập nhật là: ', updatedData)
  //   return this.http.put<any>(url, updatedData).pipe(
      
  //     catchError((error) => {
  //       console.error('Cập nhật không thành công:', error);
  //       throw error;
  //     })
  //   );
  // }
  // updateUser(id: string, updatedData: any): Observable<any> {
  //   const url = `https://localhost:7227/api/User/CapNhat/`+ id;
  //   return this.http.put<any>(url, updatedData).pipe(
  //     catchError((error) => {
  //       console.error('Cập nhật không thành công:', error);
  //       throw error;
  //     }),
  //     tap(response => {
  //       console.log('Kết quả cập nhật:', response);
  //     })
  //   );
  // }
}
