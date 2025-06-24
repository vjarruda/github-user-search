import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Repo } from '../models/repo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private http = inject(HttpClient);

  getUser(username: string): Observable<User> {
    return this.http.get<User>(`https://api.github.com/users/${username}`);
  }

  getRepos(username: string): Observable<Repo[]> {
    return this.http.get<Repo[]>(`https://api.github.com/users/${username}/repos`);
  }
}
