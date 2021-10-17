import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { repos } from './repos';

@Injectable({providedIn: 'root'})
export class GitHubService {
    // https://api.github.com/users/victor-git-cairo/repos
    baseUrl:string = "https://api.github.com/"

    constructor(private http: HttpClient){}

    getRepos(user:string):Observable<any> {
    // return this.http.get(this.baseUrl + 'users/'+ user + '/repos')
    return this.http.get(this.baseUrl + 'users/'+ user + '/repos', { observe: 'response', responseType: 'json'})
      .pipe(
          map( res => {
              return res.body;
          })
      )
    }
}