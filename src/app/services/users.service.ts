import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/users/'
   }

   create(user: User): Observable<User>  {
     return this.http.post(this.url, user) as Observable<User>;
   }

   read(i: number): Observable<User> {
    return this.http.get(this.url + i) as Observable<User>;
   }

   readAll(): Observable<Array<User>> {
     return this.http.get(this.url) as Observable<Array<User>>;
   }

   update(i: number, user: User): Observable<User> {
     return this.http.put(this.url + i, user) as Observable<User>;
   }

   delete(i: number): Observable<any> {
    return this.http.delete(this.url + i);
   }
}


class User {
  constructor(
    public id: string | number,
    public user: string,
    public correo: string ) {
  }
}
