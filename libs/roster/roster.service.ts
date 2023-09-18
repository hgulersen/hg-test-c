import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../core/http-client/src';

@Injectable({ providedIn: 'root' })
export class AuthorStatsService {
  constructor(private apiService: ApiService) {}

  getAuthorStats(): Observable<any> {
    return this.apiService.get<any>('/users/stats');
  }
}
