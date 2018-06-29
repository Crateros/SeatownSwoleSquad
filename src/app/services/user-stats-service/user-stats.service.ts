import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStatsService {

  constructor() { }

  getUserStats() {
    const response = 'Getting stats';
    return response;
  }
}
