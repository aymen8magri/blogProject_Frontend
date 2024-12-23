import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000/author';

  register(author: any) {
    return this.http.post(`${this.URL}/register`, author);
  }

  login(author: any) {
    return this.http.post(`${this.URL}/login`, author);
  }

  isLogged(){
    return localStorage.getItem('token') ? true : false;
  }

  getToken(){
    let token = localStorage.getItem('token');
    if(token){
      let data = JSON.parse(window.atob(token.split('.')[1]));
      return data;
    }
  }

  getAuthorById(id: any){
    return this.http.get(`${this.URL}/getbyid/${id}`);
  }
}
