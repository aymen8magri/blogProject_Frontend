import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {



  constructor(private http: HttpClient) { }

  private URL = 'http://localhost:3000/article';

  create(article : any) {
    return this.http.post(`${this.URL}/ajout`, article);
  }

  
}
